# Python单例模式

看到一篇关于Python单例模式总结的文章，转载过来记录一下。本文是在转载原文的基础上，添加了自己的一些理解。
原文：[https://www.cnblogs.com/huchong/p/8244279.html](https://www.cnblogs.com/huchong/p/8244279.html)

## 单例模式
**单例模式** （Singleton Pattern）是一种常用的软件设计模式，该模式的主要目的是确保某一个类只有一个实例存在。当你希望在整个系统中，某个类只能出现一个实例时，单例对象就能派上用场。
比如，某个服务器程序的配置信息存放在一个文件中，客户端通过一个 AppConfig 的类来读取配置文件的信息。如果在程序运行期间，有很多地方都需要使用配置文件的内容，也就是说，很多地方都需要创建 AppConfig 对象的实例，这就导致系统中存在多个 AppConfig 的实例对象，而这样会严重浪费内存资源，尤其是在配置文件内容很多的情况下。事实上，类似 AppConfig 这样的类，我们希望在程序运行期间只存在一个实例对象。
在 Python 中，我们可以用多种方法来实现单例模式。
## 实现单例模式的几种方式
实现单例模式有很多方式，这里介绍几种。
### 1.使用模块
其实，Python 的模块就是天然的单例模式，因为模块在第一次导入时，会生成 .pyc 文件，当第二次导入时，就会直接加载 .pyc 文件，而不会再次执行模块代码。因此，我们只需把相关的函数和数据定义在一个模块中，就可以获得一个单例对象了。如果我们真的想要一个单例类，可以考虑这样做：
```python
class Singleton(object):
    def foo(self):
        pass
singleton = Singleton()
```
将上面的代码保存在文件 ```mysingleton.py```中，要使用时，直接在其他文件中导入此文件中的对象，这个对象即是单例模式的对象。
```python
from a import singleton
```
通过这种方式，每次调用对象```singleton```使用的都是同一个对象。
### 2.使用装饰器
使用装饰器的目的是，在每次调用类对象时判断是否存在已经实例化的对象，如果实例对象不存在则创建；如果实例对象已经存在则返回已经存在的实例对象，通过这种方式确保类对象只存在一个实例化对象。
```python
def Singleton(cls):
    _instance = {}

    def _singleton(*args, **kargs):
        if cls not in _instance:
            _instance[cls] = cls(*args, **kargs)
        return _instance[cls]

    return _singleton

@Singleton
class A(object):
    a = 1
    
    def __init__(self, x=0):
        self.x = x


a1 = A(2)
a2 = A(3)
```
### 3.使用类
通过```classmethod```创建类方法，每次调用类方法```instance```时会判断是否存在属性```Singleton._instance```，（```_instance```属性是类```Singleton```的实例化对象），如果属性存在说明类已经实例化，返回已经实例化的对象；如果属性不存在，则将类实例化并赋值给属性```_instance```并返回该属性。这样保证只有一个实例对象。
```python
class Singleton(object):

    def __init__(self):
        pass

    @classmethod
    def instance(cls, *args, **kwargs):
        if not hasattr(cls, "_instance"):
            cls._instance = cls(*args, **kwargs)
        return cls._instance
```
但是这种方式在多线程中会出现个问题
```python
class Singleton(object):

    def __init__(self):
        pass

    @classmethod
    def instance(cls, *args, **kwargs):
        if not hasattr(Singleton, "_instance"):
            Singleton._instance = Singleton(*args, **kwargs)
        return Singleton._instance

import threading

def task(arg):
    obj = Singleton.instance()
    print(obj)

for i in range(10):
    t = threading.Thread(target=task,args=[i,])
    t.start()

```
程序的输出结果如下：
```python
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
<__main__.Singleton object at 0x02C933D0>
```
这样看来，这里只有一个实例对象并不能说明多线程行不通。看起来也没有问题，那是因为执行速度过快，如果在init方法中有一些IO操作，就会发现问题了，下面我们通过```time.sleep```模拟

我们在上面```__init__```方法中加入以下代码：
```python
def __init__(self):
    import time
    time.sleep(1)
```
重新执行程序后，结果如下:
```python
<__main__.Singleton object at 0x034A3410>
<__main__.Singleton object at 0x034BB990>
<__main__.Singleton object at 0x034BB910>
<__main__.Singleton object at 0x034ADED0>
<__main__.Singleton object at 0x034E6BD0>
<__main__.Singleton object at 0x034E6C10>
<__main__.Singleton object at 0x034E6B90>
<__main__.Singleton object at 0x034BBA30>
<__main__.Singleton object at 0x034F6B90>
<__main__.Singleton object at 0x034E6A90>
```
这里就会看到，每一个线程生成不同的实例对象，并不符合之前的预期。产生这样的结果是因为前面的线程在进行类的实例化的过程中进行IO操作，消耗大量时间，而由于多线程模式后面的线程并不会等待前面的类实例化完成以后才开始执行，所以就导致每个线程在调用类方法时类不存在```_instance```属性，继而每个线程都生成一个新的实例对象。
**解决办法** ：加锁！未加锁部分并发执行,加锁部分串行执行,速度降低,但是保证了数据安全。
```python
import time
import threading
class Singleton(object):
    _instance_lock = threading.Lock()

    def __init__(self):
        time.sleep(1)

    @classmethod
    def instance(cls, *args, **kwargs):
        with Singleton._instance_lock:
            if not hasattr(Singleton, "_instance"):
                Singleton._instance = Singleton(*args, **kwargs)
        return Singleton._instance


def task(arg):
    obj = Singleton.instance()
    print(obj)
for i in range(10):
    t = threading.Thread(target=task,args=[i,])
    t.start()
time.sleep(20)
obj = Singleton.instance()
print(obj)
```
### 4.基于__new__方法实现（推荐使用，方便）
通过上面例子，我们可以知道，当我们实现单例时，为了保证线程安全需要在内部加入锁。

我们知道，当我们实例化一个对象时，是先执行了类的```__new__```方法（我们没写时，默认调用```object.__new__```），实例化对象；然后再执行类的```__init__```方法，对这个对象进行初始化，所有我们可以基于这个，实现单例模式。
```python
import threading
class Singleton(object):
    _instance_lock = threading.Lock()

    def __init__(self):
        pass


    def __new__(cls, *args, **kwargs):
        if not hasattr(Singleton, "_instance"):
            with Singleton._instance_lock:
                if not hasattr(Singleton, "_instance"):
                    Singleton._instance = object.__new__(cls)  
        return Singleton._instance

obj1 = Singleton()
obj2 = Singleton()
print(obj1,obj2)

def task(arg):
    obj = Singleton()
    print(obj)

for i in range(10):
    t = threading.Thread(target=task,args=[i,])
    t.start()
```
采用这种方式的单例模式，以后实例化对象时，和平时实例化对象的方法一样 ```obj = Singleton()```
### 5.基于metaclass元类方式实现
[元类详细介绍](https://www.cnblogs.com/wangjunget/articles/9748241.html)
```python
import threading

class SingletonType(type):
    _instance_lock = threading.Lock()
    def __call__(cls, *args, **kwargs):
        if not hasattr(cls, "_instance"):
            with SingletonType._instance_lock:
                if not hasattr(cls, "_instance"):
                    cls._instance = super(SingletonType,cls).__call__(*args, **kwargs)
        return cls._instance

class Foo(metaclass=SingletonType):
    def __init__(self,name):
        self.name = name


obj1 = Foo('name')
obj2 = Foo('name')
print(obj1,obj2)
```