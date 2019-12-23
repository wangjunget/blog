# Css animation

## 语法

```css
animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction
```



### animation-name

自定义动画名称，使用```@keyframes```定义动画。



### animation-duration

动画持续时间，以秒或者毫秒为单位。



### animation-timing-function

动画的速度曲线。

```ease```默认值，动画以低速开始，然后加快，在结束前变慢。

```ease-in```动画以低速开始。

```ease-in-out```动画以低速开始和结束。

```ease-out```动画以低速结束。

```cubic-bezier(*n*,*n*,*n*,*n*)```三次贝塞尔（Cubic Bezier）函数生成速度曲线。



### animation-delay

动画开始延迟时间 



### animation-iteration-count

动画播放次数



### animation-direction

动画是否轮流播放





## keyframes

动画定义规则， 关键帧动画。

```from```动画开始时刻状态

```to```动画结束时刻状态

```xx%```百分比定义关键帧状态

