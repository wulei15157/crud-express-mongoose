var ceshi='vasasasas'
var ss=ceshi.split('') //拆分成数组


  ss.push('xiaoming')//在数组后最后一个插入
  ss.unshift('xiaohong')//在数组第一个前插入
console.log(ss)
console.log(ceshi.substr(1,2))
console.log(ceshi.substring(1,2))

ss.splice(1,1)  //删除ss数组中索引为1的 删除从索引为1包括1的  1个
console.log(ss)
  console.log(ss.slice(0,2))
 console.log(ss)


 var ssssda="11122"
 ssssda=ssssda.replace(/d/g,'a') //不重新赋值  ssssda的值不变  和  slice也要重新赋值才会变
 console.log(ssssda)
 
console.log(typeof(ssssda))

ssssda=parseInt(ssssda)

 console.log(typeof(ssssda))


 ssssda = JSON.parse(ssssda)
 console.log(typeof(ssssda))
  ssssda = JSON.stringify(ssssda)
 console.log(typeof(ssssda))