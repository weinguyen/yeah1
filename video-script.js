// Video data
const videos = {
  video1: {
    title: "Hướng dẫn thiết kế Logo chuyên nghiệp",
    author: "Nguyễn Thị Quỳnh Giao",
    views: "1.2K lượt xem",
    uploadDate: "2 ngày trước",
    thumbnail: "/placeholder.svg?height=450&width=800",
    videoUrl: "https://www.youtube.com/embed/herFvStaH5o",
    description: `
            <p>Trong video này, chúng ta sẽ học cách thiết kế một logo chuyên nghiệp từ A đến Z. Video bao gồm:</p>
            <ul>
                <li>Nghiên cứu và phân tích thương hiệu</li>
                <li>Tạo ý tưởng và sketch ban đầu</li>
                <li>Sử dụng Adobe Illustrator để thiết kế</li>
                <li>Lựa chọn màu sắc và typography phù hợp</li>
                <li>Hoàn thiện và xuất file cuối cùng</li>
            </ul>
            <p>Đây là một hướng dẫn chi tiết dành cho cả người mới bắt đầu và những ai muốn nâng cao kỹ năng thiết kế logo của mình.</p>
        `,
  },
  video2: {
    title: "Chiến lược Content Marketing hiệu quả",
    author: "Đặng Thuỳ Ngân",
    views: "856 lượt xem",
    uploadDate: "5 ngày trước",
    thumbnail: "/placeholder.svg?height=450&width=800",
    videoUrl: "https://www.youtube.com/embed/tTFLMUVXGmo",
    description: `
            <p>Video hướng dẫn xây dựng chiến lược content marketing từ cơ bản đến nâng cao:</p>
            <ul>
                <li>Xác định đối tượng khách hàng mục tiêu</li>
                <li>Lập kế hoạch nội dung theo lịch</li>
                <li>Tạo nội dung đa dạng và hấp dẫn</li>
                <li>Đo lường và tối ưu hóa hiệu quả</li>
            </ul>
            <p>Học cách tạo ra những nội dung có giá trị, thu hút và chuyển đổi khách hàng hiệu quả.</p>
        `,
  },
  video3: {
    title: "Cách tạo hiệu ứng động trong thiết kế",
    author: "Nguyễn Thị Quỳnh Giao",
    views: "2.1K lượt xem",
    uploadDate: "1 tuần trước",
    thumbnail: "/placeholder.svg?height=450&width=800",
    description: `
            <p>Khám phá thế giới animation trong thiết kế đồ họa:</p>
            <ul>
                <li>Nguyên lý cơ bản của animation</li>
                <li>Sử dụng After Effects cho motion graphics</li>
                <li>Tạo hiệu ứng chuyển động cho logo</li>
                <li>Animation cho web và mobile</li>
            </ul>
            <p>Từ những hiệu ứng đơn giản đến những animation phức tạp, video này sẽ giúp bạn nắm vững kỹ năng tạo chuyển động.</p>
        `,
  },
  video4: {
    title: "Xây dựng thương hiệu cá nhân",
    author: "Đặng Thuỳ Ngân",
    views: "3.4K lượt xem",
    uploadDate: "2 tuần trước",
    thumbnail: "/placeholder.svg?height=450&width=800",
    description: `
            <p>Hướng dẫn chi tiết cách xây dựng và phát triển thương hiệu cá nhân:</p>
            <ul>
                <li>Xác định giá trị cốt lõi và định vị</li>
                <li>Tạo visual identity nhất quán</li>
                <li>Xây dựng presence trên các nền tảng</li>
                <li>Networking và xây dựng mối quan hệ</li>
            </ul>
            <p>Thương hiệu cá nhân mạnh mẽ sẽ giúp bạn nổi bật trong thị trường cạnh tranh và tạo ra nhiều cơ hội nghề nghiệp.</p>
        `,
  },
}

// Load video content based on stored ID
document.addEventListener("DOMContentLoaded", () => {
  const currentVideo = localStorage.getItem("currentVideo") || "video1"
  loadVideoContent(currentVideo)
})

function loadVideoContent(videoId) {
  const video = videos[videoId]
  if (video) {
    document.getElementById("videoTitle").textContent = video.title
    document.getElementById("authorName").textContent = video.author
    document.getElementById("viewCount").textContent = video.views
    document.getElementById("uploadDate").textContent = video.uploadDate
    document.getElementById("videoDescription").innerHTML = video.description
    document.getElementById("videoPlayer").src = video.videoUrl
  }
}

function loadVideo(videoId) {
  localStorage.setItem("currentVideo", videoId)
  loadVideoContent(videoId)
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function goBack() {
  window.history.back()
}

// Video player functionality
document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById("videoPlayer")
  const playButton = document.querySelector(".play-button-large")

  if (videoPlayer && playButton) {
    videoPlayer.addEventListener("click", () => {
      // Here you would typically load and play the actual video
      // For demo purposes, we'll just show an alert
    })
  }
})
