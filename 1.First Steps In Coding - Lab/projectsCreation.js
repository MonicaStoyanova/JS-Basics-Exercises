function projectsCreation(input){

    let nameOfTheArch = input[0];
    let projects = Number(input[1]);
    let timePerProject = 3;
    let totalHours = projects * timePerProject;

    console.log(`The architect ${nameOfTheArch} will need ${totalHours} hours to complete ${projects} project/s.`)

}
projectsCreation(['George','4'])