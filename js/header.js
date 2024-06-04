var cadHeader = `
<nav class="navbar navbar-expand-sm  navbar-dark">
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img src="./img/Logo.png" alt="logo" height="90px"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="index.html">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="checklist.html">Check List</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Carga de defectos</a>
        </li>  
        <li class="nav-item">
            <a class="nav-link" href="#">Cierre de turno</a>
        </li> 
        <li class="nav-item dropdown">
            
        </li>
        </ul>
    </div>
    </div>
</nav>
`
document.getElementById('idHeader').innerHTML=cadHeader;