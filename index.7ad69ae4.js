const e=document.querySelector("body"),t=document.querySelector("tbody"),a=document.querySelector("thead tr");var s=e=>`
        <tr>
          <td>${e.name}</td>
          <td>${e.position}</td>
          <td>${e.office}</td>
          <td>${e.age}</td>
          <td>${e.salary}</td>
        </tr>`;const o=document.querySelector("body"),i=(e,t)=>{let a=document.createElement(e);return a.classList.add(...t),a};var n=(e,t)=>{let a=i("div",["notification",e]);a.dataset.qa="notification",a.innerHTML=`<h2 class="title">${t}</h2>`,o.append(a),setTimeout(()=>{a.style.display="none"},2e3)};const r=`
      <label for="name">
        Name:
        <input
          data-qa="name"
          type="text"
          name="name"
          id="name"
        />
      </label>

      <label for="position">
        Position:
        <input
          data-qa="position"
          type="text"
          name="position"
          id="position"
        />
      </label>

      <label for="office">
        Office:
        <select name="office" data-qa="office">
          <option
            value="Tokyo"
            selected
          >
            Tokyo
          </option>
          <option value="Singapore">Singapore</option>
          <option value="London">London</option>
          <option value="New York">New York</option>
          <option value="Edinburgh">Edinburgh</option>
          <option value="San Francisco">San Francisco</option>
        </select>
      </label>

      <label for="age">
        Age:
        <input
          data-qa="age"
          type="number"
          name="age"
          id="age"
        />
      </label>

      <label for="salary">
        Salary:
        <input
          data-qa="salary"
          type="number"
          name="salary"
          id="salary"
        />
      </label>

      <button type="submit">Save to table</button>`,l=e=>e.replace(/[$,]/g,""),c=e=>{let t="",a=0,s=String(e);for(let e=s.length-1;e>=0;e--)t+=s[e],(a+=1)%3==0&&0!==e&&(t+=",");return`$${t.split("").reverse().join("")}`},d=new class{state={name:null,position:null,office:null,age:null,salary:null};createForm(){let e=document.createElement("form");return e.classList.add("new-employee-form"),e.innerHTML=r,e.addEventListener("submit",this.handleSubmit),e.addEventListener("change",this.handleChange),e}handleSubmit=e=>{if(e.preventDefault(),!this.isValid())return;let a=s(this.state);t.innerHTML+=a,n("success",`The ${this.state.name} was added`),this.reset(),e.target.reset()};isValid(){let{age:e,position:t,office:a,salary:s}=this.state;return this.state.name&&t&&e&&a&&s?this.state.name.length<4?(n("error","Minimum name length is 4 "),!1):isNaN(this.state.name)&&isNaN(t)?!(e<18)&&!(e>90)||(n("error","Age must be greater than 18 and less than 90"),!1):(n("error","Name and position must be string"),!1):(n("error","All the fields are required"),!1)}handleChange=e=>{"salary"===e.target.name?this.state[e.target.name]=c(e.target.value):this.state[e.target.name]=e.target.value};reset(){this.state={name:null,position:null,office:null,age:null,salary:null}}},p={0:"name",1:"position",2:"office",3:"age",4:"salary"};var m=class{activeRow=null;employees=[];constructor(){this.employees=this.getEmployeesData(),this.addRowListeners(),e.append(d.createForm())}createTemplate(e){return e.map(e=>s(e)).join("")}getEmployeesData(){let e=[];for(let a of t.rows){let t=Array.from(a.cells).reduce((e,t,a)=>(e[p[a]]=t.textContent,e),{});e.push(t)}return e}drawEmployeeView=e=>{t.innerHTML=this.createTemplate(e)};addRowListeners(){t.addEventListener("click",e=>{let t=e.target.closest("tr");t&&this.changeActiveRow(t)})}changeActiveRow(e){this.activeRow&&this.activeRow!==e&&this.activeRow.classList.remove("active"),this.activeRow=e,this.activeRow.classList.add("active")}};const u=(e,t,a="asc")=>"asc"===a?[...e].sort((e,a)=>e[t]-a[t]):[...e].sort((e,a)=>a[t]-e[t]),h=(e,t,a="asc")=>"asc"===a?[...e].sort((e,a)=>e[t].localeCompare(a[t])):[...e].sort((e,a)=>a[t].localeCompare(e[t])),y=(e,t="asc")=>"asc"===t?[...e].sort((e,t)=>l(e.salary)-l(t.salary)):[...e].sort((e,t)=>l(t.salary)-l(e.salary)),f=new class{sortEmployees(e,t,a){switch(t){case"name":case"position":case"office":return h(e,t,a);case"age":return u(e,t,a);case"salary":return y(e,a);default:throw Error("Wrong type!")}}};new class extends m{active=null;sortType={name:"asc",position:"asc",office:"asc",age:"asc",salary:"asc"};constructor(){super(),this.addListener(),this.sortEmployees=f.sortEmployees}addListener(){a.addEventListener("click",e=>{let t=e.target.textContent.toLowerCase();this.setSortType(t),this.employees=this.sortEmployees(this.employees,t,this.sortType[t]),this.drawEmployeeView(this.employees)})}setSortType(e){if(e!==this.active){this.sortType[e]="asc",this.active=e;return}this.sortType[e]="asc"===this.sortType[e]?"desc":"asc",this.active=e}};
//# sourceMappingURL=index.7ad69ae4.js.map
