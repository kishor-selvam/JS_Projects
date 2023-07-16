function showAlert(message,className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".container")
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(()=>{
        document.querySelector(".alert").remove()
    },2000)
}

// Clear All Fields

function clearFields(){
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollNo").value = "";
}


//add data
document.querySelector("#student-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let selectedRow = null;

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const rollNo = document.querySelector("#rollNo").value;

    if(firstName == "" || lastName == "" || rollNo == ""){
        showAlert("Please Fill in all fields","danger")
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#student-list")
            const row = document.createElement("tr");

            row.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td><a href="#" class="btn btn-warning btn-sm edit">Edit</a>
            <a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
            `

            list.append(row);
            selectedRow = null;
            showAlert("Student Added","success")

        }
    }

    clearFields();
})


// Detele Data

document.querySelector("#student-list").addEventListener('click',(e)=>{
    let target = e.target;

    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Student Data Deleted","danger")
    }
})