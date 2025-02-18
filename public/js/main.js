// FRONT-END (CLIENT) JAVASCRIPT HERE


window.onload = async function() {
    const button = document.querySelector("button");
    button.onclick = submit;

    const res = await fetch( "/assignments")
    const assignments = await res.json()
    console.log( "Assignments:", assignments )

    const assignmentTable = document.querySelector("#datadisplay")
    for( let i = 0; i < assignments.length; i++ ) {
        const newRow = assignmentTable.insertRow(-1)
        newRow.insertCell(0).textContent = assignments[i].assignmentname
        newRow.insertCell(1).textContent = assignments[i].classname
        newRow.insertCell(2).textContent = assignments[i].deadline
        newRow.insertCell(3).textContent = assignments[i].priority
    }

}

const submit = async function( event ) {
    // stop form submission from trying to load
    // a new .html page for displaying results...
    // this was the original browser behavior and still
    // remains to this day
    event.preventDefault()

    const assignmentinput = document.querySelector( "#assignmentname" ),
        classinput = document.querySelector( "#classname" ),
        deadlineinput = document.querySelector( "#deadline" ),
        json = { assignmentname: assignmentinput.value , classname: classinput.value, deadline: deadlineinput.value},
        body = JSON.stringify( json )

    const response = await fetch( "/submit", {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body
    })

    const newAssignment = await response.json()
    console.log( "New Assignment:", newAssignment )

    const assignmentTable = document.querySelector("#datadisplay")
    const newRow = assignmentTable.insertRow(-1)

    newRow.insertCell(0).textContent = newAssignment.assignmentname
    newRow.insertCell(1).textContent = newAssignment.classname
    newRow.insertCell(2).textContent = newAssignment.deadline
    newRow.insertCell(3).textContent = newAssignment.priority

}

