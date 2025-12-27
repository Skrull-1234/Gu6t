class teamMember {
    constructor(email, username, password) {
        this.email=email;
        this.username=username;
        this.password=password;
    }
}
let teamMembers=[];
document.getElementById('team-member-form').addEventListener('submit',(e) =>{
    e.preventDefault ();
    let email=document.getElementById('email').Value;
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('invalid email');
        return;
    }
    if(!validateUsername(username)){
        alert('invalid username');
        return;
    }
    if(!validatePassword(password)){
        alert('invalid password');
        return;
    }
        if(NamedNodeMap.length <3 ){
            alert('invalid input');
            return;
        } 
        let teamMember =new teamMember(Name,Email,Username,Password);
        teamMembers.push(teamMember);
        console.log(teamMembers);
        });
        function validateEmail(email){
            let regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return regex.test(email);
        }
        function validateUsername(username){
            return !username.includes('');
        }
        function validatepassword(password){
            return password.length >=8;
        }