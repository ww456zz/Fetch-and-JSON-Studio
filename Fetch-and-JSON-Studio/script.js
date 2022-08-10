// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            let index = 0;
            let numbers = [];
            let arr = [];
            let j = 0;
            let y = 0
            for (let a = 0; a<json.length;a++) {
            numbers.push(json[a].hoursInSpace);
            }
            let i = numbers.sort((a, b) => b-a);
            function pushArr (num1,num2,arr) {
                if(arr.length >= 7) {
                return;
                }else {
                if (i[num1] == json[num2].hoursInSpace) {
                    arr.push(json[num2]);
                    num2 = 0;
                    num1++;
                    pushArr(num1,num2,arr);
                }else {
                num2++;
                pushArr(num1,num2,arr);
                }
            }
            }

        pushArr(j,y,arr);
            
            const container = document.getElementById("container");
        for (index; index<arr.length;index++) {
            if (arr[index].active == true) {
                container.innerHTML += `
                <div class="astronaut">
        <div class="bio">
          <h3>${arr[index].firstName} ${arr[index].lastName}</h3>
          <ul>
             <li>Hours in space: ${arr[index].hoursInSpace}</li>
             <li  class="active">Active: ${arr[index].active}</li>
             <li>Skills: ${arr[index].skills}</li>
          </ul>
        </div>
        <img class="avatar" src=${arr[index].picture}>
        </div>
            `;
            } else {
            container.innerHTML += `
            <div class="astronaut">
    <div class="bio">
      <h3>${arr[index].firstName} ${arr[index].lastName}</h3>
      <ul>
         <li>Hours in space: ${arr[index].hoursInSpace}</li>
         <li>Active: ${arr[index].active}</li>
         <li>Skills: ${arr[index].skills}</li>
      </ul>
    </div>
    <img class="avatar" src=${arr[index].picture}>
    </div>
        `;
            }
        }
        container.innerHTML += `
        Astronaut Count: ${index}
        `;
        })
        
    });});