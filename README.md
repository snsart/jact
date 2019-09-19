#### 色彩:

* 主 #3366CC
* 从 #CCCC66
* 辅 #333300

![color](imgs/colors.png)

# Button

#### 【属性】:

|属性|类型|说明|
|---|---|---|
|href|string|跳转地址|
|onClick|func|点击按钮执行的回调函数|

#### 【应用举例】
```
<Button onClick={()=>{alert('ouch')}}>Click me </Button>			
<Button href="http://reactjs.com">Follow me </Button>
```

#### 【示意图】

![button](imgs/button.png)

# Suggest

#### 【属性】

|属性|类型|说明|
|---|---|---|
|options|[string]|选项列表|

#### 【方法】
|方法|说明|
|---|---|
|getValue()|当前选择的内容|

#### 【应用举例】
```
<Suggest options={['西瓜','苹果','葡萄','梨']} />		
```

#### 【示意图】
![suggest](imgs/suggest.png)


