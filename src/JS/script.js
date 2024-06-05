
   let icon = document.querySelector(".ddd")
   let icon2 = document.querySelector(".ggg")
   let icon3 = document.querySelector(".sss")
   let icon4 = document.querySelector(".ttt")
   
 
    document.querySelectorAll(".accepted").forEach(Accepted => {
        Accepted.addEventListener('mouseenter', () => { 
            Accepted.style.backgroundColor = '#6cf106';
            Accepted.style.transition = '300ms';
            icon.style.transition = '300ms';
            icon.style.backgroundColor= '#6cf106';
            Accepted.innerHTML = 'Accepted'
        });
    });
    
    document.querySelectorAll(".reject").forEach(reject => {
        reject.addEventListener('mouseenter', () => { 
            reject.style.backgroundColor = '#ff0000';
            reject.style.transition = '300ms';
            icon2.style.transition = '300ms';
            icon2.style.backgroundColor= '#ff0000';
            reject.innerHTML = 'Reject'
        });
    });
    
    document.querySelectorAll(".pending").forEach(pending => {
        pending.addEventListener('mouseenter', () => { 
            pending.style.backgroundColor = '#ffb700';
            pending.style.transition = '300ms';
            icon3.style.transition = '300ms';
            icon3.style.backgroundColor= '#ffb700';
            pending.innerHTML = 'Pending'
        });
    });
    document.querySelectorAll(".roott").forEach(roott => {
        roott.addEventListener('mouseenter', () => { 
            roott.style.backgroundColor = '#858482';
            roott.style.transition = '300ms';
            icon4.style.transition = '300ms';
            icon4.style.backgroundColor= '#858482';
            roott.innerHTML = 'Root'
           
        });
    });



    document.querySelectorAll(".accepted").forEach(Accepted => {
        Accepted.addEventListener('mouseout', () => { 
            Accepted.style.backgroundColor = '#ffffff';
            Accepted.style.transition = '300ms';
            icon.style.transition = '300ms';
            icon.style.backgroundColor= '#000000';
             Accepted.innerHTML = "Buy Home"
        });
    });
    document.querySelectorAll(".reject").forEach(reject => {
        reject.addEventListener('mouseout', () => { 
            reject.style.backgroundColor = '#ffffff';
            reject.style.transition = '300ms';
            icon2.style.transition = '300ms';
            icon2.style.backgroundColor= '#000000';
             reject.innerHTML = "Rent Home"
            
        });
    });
    document.querySelectorAll(".pending").forEach(pending => {
        pending.addEventListener('mouseout', () => { 
            pending.style.backgroundColor = '#ffffff';
            pending.style.transition = '300ms';
            icon3.style.transition = '300ms';
            icon3.style.backgroundColor= '#000000';
            pending.innerHTML = "Rent Home"
        });
    });
    document.querySelectorAll(".roott").forEach(roott => {
        roott.addEventListener('mouseout', () => { 
            roott.style.backgroundColor = '#ffffff';
            roott.style.transition = '300ms';
            icon4.style.transition = '300ms';
            icon4.style.backgroundColor= '#000000';
            roott.innerHTML = "Root Home"
        });
    });
    