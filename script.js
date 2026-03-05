const roles=[
"AI Enthusiast",
"Data Science Intern",
"Machine Learning Learner"
]

let i=0
let j=0
let current=""
let letter=""

function type(){

if(i===roles.length){
i=0
}

current=roles[i]
letter=current.slice(0,++j)

document.getElementById("typing").textContent=letter

if(letter.length===current.length){
i++
j=0
}

setTimeout(type,120)

}

type()


const username="saireddypotlapalli"
const container=document.getElementById("github-projects")

fetch(`https://api.github.com/users/${username}/repos`)
.then(res=>res.json())
.then(data=>{

if(data.length===0) throw "No repos"

data.slice(0,6).forEach(repo=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`
<h3>${repo.name}</h3>
<p>${repo.description || "AI/Data Science Project"}</p>
<a href="${repo.html_url}" target="_blank">View Code</a>
`

container.appendChild(card)

})

})
.catch(()=>{

const fallbackProjects=[
{
name:"Breast Cancer Detection",
desc:"Deep learning CNN model for cancer detection."
},
{
name:"Crop Yield Prediction",
desc:"Machine learning model predicting agricultural yield."
},
{
name:"Sales Analytics Dashboard",
desc:"Business analytics dashboard using Python."
}
]

fallbackProjects.forEach(p=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`
<h3>${p.name}</h3>
<p>${p.desc}</p>
`

container.appendChild(card)

})

})



particlesJS("particles-js",{

particles:{
number:{value:80},
color:{value:"#3b82f6"},
size:{value:3},
line_linked:{
enable:true,
distance:150,
color:"#3b82f6"
},
move:{speed:2}
}

})