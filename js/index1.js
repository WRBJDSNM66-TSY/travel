	function saveStorage(){
				        var target=document.getElementById("input");
				        //根据传过来的ID，获得获得一个变量
				        var str=target.value;
				        //将变量的值提取出来赋给str变量，也就是将input中的值提取出来放在str里面
				        //sessionStorage.setItem("mess",str);
						localStorage.setItem("mess",str);
				        //调用临时存储的API（接口），前面的参数是存储的名字，后面的是value
				  }
				  
			function loadStorage(){
				        var target=document.getElementById("msg");
				        //var msg=sessionStorage.getItem("mess");
						 var msg=localStorage.getItem("mess");
				        //从存储单元中把数据提取出来放在msg中
				        target.innerHTML=msg;
				        //用HTM固有的方法把数据传送过去
						}