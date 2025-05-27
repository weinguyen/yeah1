// Article data
const articles = {
  article1: {
    title: "Lối sống tối giản: Xu hướng sống mới của giới trẻ",
    author: "Phạm Thảo Vy",
    category: "Phong cách sống",
    date: "27 tháng 5, 2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    content: `
    <p class="lead">Lối sống tối giản (minimalism) không chỉ là phong cách bài trí nội thất mà còn là triết lý sống đang được giới trẻ ưa chuộng.</p>

    <figure>
      <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80" alt="Minimalist lifestyle" />
      <figcaption>Không gian sống tối giản giúp giảm căng thẳng</figcaption>
    </figure>

    <h2>1. Tối giản để sống nhẹ nhàng hơn</h2>
    <p>Sống tối giản giúp con người tập trung vào những điều thật sự quan trọng, loại bỏ sự dư thừa không cần thiết.</p>

    <h2>2. Không gian tối giản và tinh thần</h2>
    <p>Không gian gọn gàng, ít vật dụng có thể mang lại cảm giác thư giãn và tăng năng suất làm việc.</p>

    <figure>
      <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80" alt="Minimalist interior" />
      <figcaption>Nội thất tối giản nhưng tinh tế</figcaption>
    </figure>

    <h2>3. Lối sống bền vững</h2>
    <p>Tối giản gắn liền với tiêu dùng có ý thức – giảm thiểu rác thải, tiết kiệm tài nguyên và hướng tới sự bền vững.</p>

    <h2>Kết luận</h2>
    <p>Minimalism không chỉ là phong trào mà là lựa chọn sống có chủ đích, giúp con người sống chậm và sâu sắc hơn.</p>
  `
  },

  article2: {
    title: "Chiến lược Marketing số hiệu quả",
    author: "Đặng Thuỳ Ngân",
    category: "Marketing",
    date: "12 tháng 1, 2024",
    image: "/placeholder.svg?height=400&width=800",
    content: `
            <p class="lead">Marketing số đã trở thành yếu tố then chốt quyết định sự thành công của doanh nghiệp trong thời đại kỹ thuật số.</p>
            
            <h2>1. Xác định đối tượng khách hàng</h2>
            <p>Việc hiểu rõ đối tượng khách hàng là bước đầu tiên và quan trọng nhất trong việc xây dựng chiến lược marketing số hiệu quả.</p>
            
            <h2>2. Tối ưu hóa SEO</h2>
            <p>SEO không chỉ giúp website xuất hiện trên trang đầu của Google mà còn tăng độ tin cậy và uy tín của thương hiệu.</p>
            
            <h2>3. Content Marketing</h2>
            <p>Nội dung chất lượng là vua. Tạo ra những nội dung có giá trị, hữu ích cho khách hàng sẽ giúp xây dựng mối quan hệ lâu dài.</p>
            
            <h2>4. Social Media Marketing</h2>
            <p>Mạng xã hội là kênh tiếp cận khách hàng trực tiếp và hiệu quả nhất hiện nay.</p>
        `,
  },
  article3: {
    title: "Nghệ thuật kể chuyện trong PR",
    author: "Nguyễn Thị Quỳnh Giao",
    category: "Truyền thông",
    date: "10 tháng 1, 2024",
    image: "/placeholder.svg?height=400&width=800",
    content: `
            <p class="lead">Storytelling là một trong những công cụ mạnh mẽ nhất trong PR, giúp tạo ra kết nối cảm xúc với khán giả.</p>
            
            <h2>1. Tầm quan trọng của storytelling</h2>
            <p>Con người sinh ra đã có khả năng kể chuyện và lắng nghe câu chuyện. Đây là cách tự nhiên nhất để truyền tải thông điệp.</p>
            
            <h2>2. Cấu trúc câu chuyện hiệu quả</h2>
            <p>Một câu chuyện tốt cần có nhân vật, xung đột, và kết thúc có ý nghĩa.</p>
            
            <h2>3. Ứng dụng trong PR</h2>
            <p>Storytelling trong PR giúp nhân hóa thương hiệu và tạo ra những trải nghiệm đáng nhớ cho khách hàng.</p>
        `,
  },
  article4: {
    title: "Tối ưu hóa nội dung Social Media",
    author: "Đặng Thuỳ Ngân",
    category: "Social Media",
    date: "8 tháng 1, 2024",
    image: "/placeholder.svg?height=400&width=800",
    content: `
            <p class="lead">Tạo nội dung hấp dẫn trên mạng xã hội đòi hỏi sự hiểu biết sâu sắc về từng nền tảng và đối tượng khách hàng.</p>
            
            <h2>1. Hiểu rõ từng nền tảng</h2>
            <p>Mỗi nền tảng mạng xã hội có đặc điểm và đối tượng người dùng riêng biệt.</p>
            
            <h2>2. Tạo nội dung visual hấp dẫn</h2>
            <p>Hình ảnh và video luôn thu hút sự chú ý nhiều hơn so với văn bản thuần túy.</p>
            
            <h2>3. Tương tác với cộng đồng</h2>
            <p>Social media là về sự tương tác hai chiều, không chỉ đơn thuần là đăng nội dung.</p>
        `,
  },
}

// Load article content based on stored ID
document.addEventListener("DOMContentLoaded", () => {
  const currentArticle = localStorage.getItem("currentArticle") || "article1"
  loadArticleContent(currentArticle)
})

function loadArticleContent(articleId) {
  const article = articles[articleId]
  if (article) {
    document.getElementById("articleTitle").textContent = article.title
    document.getElementById("articleImage").src = article.image
    document.getElementById("articleContent").innerHTML = article.content

    const categoryElement = document.querySelector(".article-category")
    const dateElement = document.querySelector(".article-date")
    if (categoryElement) categoryElement.textContent = article.category
    if (dateElement) {
      dateElement.textContent = article.date
    }
  }
}

function loadArticle(articleId) {
  localStorage.setItem("currentArticle", articleId)
  loadArticleContent(articleId)
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function goBack() {
  window.history.back()
}
