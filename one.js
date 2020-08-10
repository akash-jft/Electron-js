console.log("this is test 2")

const electron=require('electron')
const ipc=electron.ipcRenderer
const Asyncbtn=document.getElementById('one')
const syncbtn=document.getElementById('two')
Asyncbtn.addEventListener('click',function(){
    console.log('async msg 1')
    ipc.send('Asysncronous-error')
    console.log('async msg 2')
   
})

syncbtn.addEventListener('click',function(){
    console.log('sync msg 1')
    const reply=ipc.sendSync('sync-message')
    console.log(reply)
    console.log('sync msg 2')
   
})

ipc.on('Asysncronous-reply',function(event,arg){
console.log(arg)
})

const BrowserWin=electron.remote.BrowserWindow
let window1=new BrowserWin()
window1.loadURL('http://github.com')
// let request = require('request')

// request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",function(error,res,body){
// let bodyjson=JSON.parse(body)
// let randomquote=bodyjson[0]["content"]["rendered"];
// document.getElementById("one").innerHTML=randomquote
// console.log(randomquote)
// })

// setInterval(function(){
//     request("https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand",function(error,res,body){
//         let bodyjson=JSON.parse(body)
//         let randomquote=bodyjson[0]["content"]["rendered"];
//         document.getElementById("one").innerHTML=randomquote
        
//         }) 
// }, 50)