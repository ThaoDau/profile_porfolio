import Navbar from "./Navbar";

const Header = () => {
    return `
    
        <div class="header container-fluid d-flex justify-content-between align-items-center  " >
            <div class="logo">
                <h1 style="font-family: lato, sans-serif;">T.D</h1>
            </div>
            <div class = 'list-menu-sub' style= 'display:none'>
                <div class="categories-two w-100">
                        
                        
                
                        <div class="box-popular-new ">
                        <ul class="categories-list list-unstyled">
                            
                            ${Navbar()}
                        </ul>
                        </div>
                        <div class='box-icon'>
                        <h3 class="categories-title"><i class='bx bx-list-ul'></i></h3>
                        </div>
                </div>
            </div>
            <div class="list-menu">
                <nav>
                    <ul class="d-flex list-unstyled  ">
                        ${Navbar()}
                        <li><button class="btn "onclick="location.href='/login';"><i class='bx bx-user'></i></button></li>
                    </ul>
                </nav>
            </div>
        </div>
    `
};
export default Header;
