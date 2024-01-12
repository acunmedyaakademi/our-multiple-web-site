const digitalCardBerke = document.querySelector("#divFieldsBerke"); 

async function cardBerke(){
    const cardBerke = await fetch("https://api.github.com/users/berkeskin");
    const data =  await cardBerke.json();
    return [data];

}

async function getCardBerke(){
    const data = await cardBerke();
    for (const user of data) {
        digitalCardBerke.innerHTML +=  `
        <div id="link">
            <pre><a href="https://www.instagram.com/berkeskinnnn/" target="_blank"><i class="fa-brands fa-instagram"></i> İNSTAGRAM</a>          <a id="link2" href="https://www.linkedin.com/in/berke-keskin-93760329a/" target="_blank"><i class="fa-brands fa-linkedin"></i></i> LİNKLEDİN</a>          <a id="link3" href="https://github.com/berkeskin" target="_blank"><i class="fa-brands fa-square-github"></i></i> GİTHUB</a></pre>
        </div>
        
        <div>
            <img id="img" src="${user.avatar_url}" alt="">
        </div>
        <ul id="users">
            <li id="user1">İsim Soyisim : ${user.name}</li>
            <li id="user2">Kullanıcı Adı : ${user.login}</li>
            <li id="user3">Lokasyon : ${user.location}</li>
            <li id="user4">Kullanıcı İD : ${user.id}</li>
            <li id="user5">Public Repo : ${user.public_repos}</li>
            <li id="user6">Public Gists : ${user.public_gists}</li>
            <li id="user7">Takipçi : ${user.followers} 
            <li id="user8">Takip Edilen : ${user.following}</li></span>
            <p id="user9">BİO : ${user.bio}</p>
        </ul>
         `
    }
}

getCardBerke();


const digitalCardSerhat = document.querySelector("#divFieldsSerhat"); 

async function cardSerhat(){
    const cardSerhat = await fetch("https://api.github.com/users/kocserhatt");
    const data =  await cardSerhat.json();
    return [data];

}

async function getCardSerhat(){
    const data = await cardSerhat();
    for (const user of data) {
        digitalCardSerhat.innerHTML +=  `
        <div id="link">
            <pre><a href="https://www.instagram.com/koc.serhatt/" target="_blank"><i class="fa-brands fa-instagram"></i> İNSTAGRAM</a>          <a id="link2" href="https://www.linkedin.com/in/serhat-ko%C3%A7-56b30929b/" target="_blank"><i class="fa-brands fa-linkedin"></i></i> LİNKLEDİN</a>          <a id="link3" href="https://github.com/kocserhatt" target="_blank"><i class="fa-brands fa-square-github"></i></i> GİTHUB</a></pre>
        </div>
        
        <div>
            <img id="img" src="${user.avatar_url}" alt="">
        </div>
        <ul id="users">
            <li id="user1">İsim Soyisim : ${user.name}</li>
            <li id="user2">Kullanıcı Adı : ${user.login}</li>
            <li id="user3">Lokasyon : ${user.location}</li>
            <li id="user4">Kullanıcı İD : ${user.id}</li>
            <li id="user5">Public Repo : ${user.public_repos}</li>
            <li id="user6">Public Gists : ${user.public_gists}</li>
            <li id="user7">Takipçi : ${user.followers} 
            <li id="user8">Takip Edilen : ${user.following}</li></span>
            <p id="user9">BİO : ${user.bio}</p>
        </ul>
         `
    }
}

getCardSerhat();

const digitalCardHakan = document.querySelector("#divFieldsHakan"); 

async function cardHakan(){
    const cardHakan = await fetch("https://api.github.com/users/Hakaantkn");
    const data =  await cardHakan.json();
    return [data];

}

async function getCardHakan(){
    const data = await cardHakan();
    for (const user of data) {
        digitalCardHakan.innerHTML +=  `
        <div id="link">
            <pre><a href="https://www.instagram.com/hakaantkn/" target="_blank"><i class="fa-brands fa-instagram"></i> İNSTAGRAM</a>          <a id="link2" href="https://www.linkedin.com/in/hakan-tekin-a6bab229a/" target="_blank"><i class="fa-brands fa-linkedin"></i></i> LİNKLEDİN</a>          <a id="link3" href="https://github.com/Hakaantkn" target="_blank"><i class="fa-brands fa-square-github"></i></i> GİTHUB</a></pre>
        </div>
        
        <div>
            <img id="img" src="${user.avatar_url}" alt="">
        </div>
        <ul id="users">
            <li id="user1">İsim Soyisim : ${user.name}</li>
            <li id="user2">Kullanıcı Adı : ${user.login}</li>
            <li id="user3">Lokasyon : ${user.location}</li>
            <li id="user4">Kullanıcı İD : ${user.id}</li>
            <li id="user5">Public Repo : ${user.public_repos}</li>
            <li id="user6">Public Gists : ${user.public_gists}</li>
            <li id="user7">Takipçi : ${user.followers} 
            <li id="user8">Takip Edilen : ${user.following}</li></span>
            <p id="user9">BİO : ${user.bio}</p>
        </ul>
         `
    }
}

getCardHakan();

const digitalCardOmer = document.querySelector("#divFieldsOmer"); 

async function cardOmer(){
    const cardOmer = await fetch("https://api.github.com/users/esmomerr");
    const data =  await cardOmer.json();
    return [data];

}

async function getCardOmer(){
    const data = await cardOmer();
    for (const user of data) {
        digitalCardOmer.innerHTML +=  `
        <div id="link">
            <pre><a href="https://www.instagram.com/_esnomerr/" target="_blank"><i class="fa-brands fa-instagram"></i> İNSTAGRAM</a>          <a id="link2" href="https://www.linkedin.com/in/%C3%B6mer-esim-68921a248/" target="_blank"><i class="fa-brands fa-linkedin"></i></i> LİNKLEDİN</a>          <a id="link3" href="https://github.com/esmomerr" target="_blank"><i class="fa-brands fa-square-github"></i></i> GİTHUB</a></pre>
        </div>
        
        <div>
            <img id="img" src="${user.avatar_url}" alt="">
        </div>
        <ul id="users">
            <li id="user1">İsim Soyisim : ${user.name}</li>
            <li id="user2">Kullanıcı Adı : ${user.login}</li>
            <li id="user3">Lokasyon : ${user.location}</li>
            <li id="user4">Kullanıcı İD : ${user.id}</li>
            <li id="user5">Public Repo : ${user.public_repos}</li>
            <li id="user6">Public Gists : ${user.public_gists}</li>
            <li id="user7">Takipçi : ${user.followers} 
            <li id="user8">Takip Edilen : ${user.following}</li></span>
            <p id="user9">BİO : ${user.bio}</p>
        </ul>
         `
    }
}

getCardOmer();

const digitalCardYusuf = document.querySelector("#divFieldsYusuf"); 

async function cardYusuf(){
    const cardYusuf = await fetch("https://api.github.com/users/Blackkcobraa");
    const data =  await cardYusuf.json();
    return [data];

}
 
async function getCardYusuf(){
    const data = await cardYusuf();
    for (const user of data) {
        digitalCardYusuf.innerHTML +=  `
        <div id="link">
            <pre><a href="https://www.instagram.com/yusufhazimi/" target="_blank"><i class="fa-brands fa-instagram"></i> İNSTAGRAM</a>          <a id="link2" href="https://www.linkedin.com/in/yusuf-hazimi-3aa1a829b/" target="_blank"><i class="fa-brands fa-linkedin"></i></i> LİNKLEDİN</a>          <a id="link3" href="https://github.com/Blackkcobraa" target="_blank"><i class="fa-brands fa-square-github"></i></i> GİTHUB</a></pre>
        </div>
        
        <div>
            <img id="img" src="${user.avatar_url}" alt="">
        </div>
        <ul id="users">
            <li id="user1">İsim Soyisim : ${user.name}</li>
            <li id="user2">Kullanıcı Adı : ${user.login}</li>
            <li id="user3">Lokasyon : ${user.location}</li>
            <li id="user4">Kullanıcı İD : ${user.id}</li>
            <li id="user5">Public Repo : ${user.public_repos}</li>
            <li id="user6">Public Gists : ${user.public_gists}</li>
            <li id="user7">Takipçi : ${user.followers} 
            <li id="user8">Takip Edilen : ${user.following}</li></span>
            <p id="user9">BİO : ${user.bio}</p>
        </ul>
         `
    }
}

getCardYusuf();

