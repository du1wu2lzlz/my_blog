面试：  
最后问问题的时候要 *一定要抓住最后一个问题*，因为从这个问题，可以获取这次面试反馈以及团队研究方向。  
参考提问：  
1.对我此次面试的评价，哪里答得不好、有什么建议？  
2.团队是偏向业务还是偏向基础技术？（简单地讲，业务就是用轮子、基础技术就是造轮子，各有各的好，看各人爱好了）  











+  [一些面试题](https://github.com/qiu-deqing/FE-interview)  

+  [深入理解js异步](https://github.com/wangfupeng1988/js-async-tutorial)  

+  [阮老师Js基础](https://github.com/wangdoc/javascript-tutorial)  

+  [jquery源码解读](https://github.com/chokcoco/jQuery-)  

+  [Node.js 包教不包会](https://github.com/alsotang/node-lessons)  

+  [一些找实习的经验](https://github.com/topview-frontend/campus-recruitment/blob/master/interview/frontend_interview_by_timtsang.md) 

+  [一些相对全的面试题以及答案](https://github.com/infp/Front-end-Interview)  

+  汤姆大叔[深入理解js系列](http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html#3848276)

+ [常见面试题答案](https://github.com/qiu-deqing/FE-interview#%E5%89%8D%E7%AB%AF%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E5%93%AA%E4%BA%9Bseo)


1.  实现一个LazyMan，可以按照以下方式调用:
```
	LazyMan(“Hank”)输出:
	Hi! This is Hank!
	LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
	Hi! This is Hank!
	//等待10秒..
	Wake up after 10
	Eat dinner~
	LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
	Hi This is Hank!
	Eat dinner~
	Eat supper~
	LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
	//等待5秒
	Wake up after 5
	Hi This is Hank!
	Eat supper
	题目考点：
		1. 方法的链式调用
		2. 类的使用和面向编程的思路
		3. 设计模式的使用
		4. 代码的解耦
		5. 最少知识原则，即 迪米特原则
		6. 代码的书写结构和命名
	思路：
		从题目看，可以确定是拟人化的输出；
		首先，应该是一个类来描述这一类人，它具有吃饭，睡觉等行为；
		然后，从三个例子来看，都需要调用LazyMan来进行初始化；
		最后，调用顺序是按次序来执行的，所以这是一个队列；
		```
