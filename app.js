let memberArray = []

let managerName = prompt("What is the manager name?")
let memberName = ""
let continueQ = true

for(let i=0; i<100; i++)
{
    if(continueQ) {i = 100}
    else if(continueQ === false)
    {
        memberName = prompt("What is the Team Member Name?")
        .then(answers =>
            {
                memberArray.push(answers)
            })
        prompt("Would you like to add more? (Y/N")
        .then(answers =>
            {
                if(answers === "Y") {continueQ = true}
                else {continueQ = false}
            })
    }
} //asking for Team Members name for input and a loop to keep asking until cancel

let createNote = (req, res) =>
{
    res.write(${managerName})
    for(let i=0;i<memberArray.length(); i++)
    {
        let teamMeM = memberArray[i]
        res.write(${teamMeM})
    }
    res.end()
}// How do I render to a note......