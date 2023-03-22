// import { deleteProject, getProjects } from "../../api/project";
import { useEffect, useState } from "../../libs"
const AdminProjectPage = () => {
    //   const[data,setData] = useState(projectList);
    // gọi hàm để bắt đầu xử lý
    const [data, setData] = useState([]);

    // Hàm được gọi lại sau khi return ( render ) ra ngoài màn hình
    useEffect(()=>{
        // Lấy dữ liệu từ localStorage ra, nếu nó không có thì gán bằng []
        // const projects = JSON.parse(localStorage.getItem("projects"))||[];
        // setData(projects)
        fetch("https://641a75a4c152063412d9e808.mockapi.io/Api_products")
          .then((response)=> response.json())
          .then((data)=> setData(data))

        // getProjects().then(({data})=> setData(data))
    },[])
    // chạy sau khi render
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        
        console.log(btns);
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                console.log(id)
                // localStorage.setItem("projects",JSON.stringify(newData)); //set lại data ở localStorage
                
                const newData = data.filter((project) => {
                    return project.id !== id;
                })
                // Xóa ở local
                setData(newData); //set lại data ở client
                // Xóa ở server
                fetch(`https://641a75a4c152063412d9e808.mockapi.io/Api_products/${id}`,{
                  method:"DELETE"
                })

            })
        }
    })
    
      
    return /*html*/`
    <div class="container">
    <h1 class="text-center my-4">Danh sách dự án</h1>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tên dự án</th>
          <th scope="col">Loại</th>
          <th scope="col">Nội dung tóm tắt</th>
          <th scope="col">Thời gian làm</th>
          <th scope="col">Thời gian hoàn thành</th>
          <th scope="col">Hành động</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((project, index) => {
          const startDate = new Date(project.tgianbatdau);
          const endDate = new Date(project.tgianketthuc);
          const duration = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 ); // duration in months
  
          return `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${project.name}</td>
              <td>${project.category}</td>
              <td>${project.noidungtomtat}</td>
              <td>${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}</td>
              <td>${Math.round(duration) + " " + "ngày"}</td>
              <td>
                <div class="d-flex align-items-center">
                  <a href="/admin/projects/${project.id}/update" class="btn btn-sm btn-warning me-2">Sửa</a>
                  <button data-id="${project.id}" class="btn btn-sm btn-danger btn-remove">Xóa</button>
                </div>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
    <div class="text-end">
      <a href="/admin/projects/add" class="btn btn-success">Thêm dự án</a>
      <button class="btn btn-danger ms-2" id="btn-logout">Đăng xuất</button>
    </div>
  </div>
  
  `
}

export default AdminProjectPage