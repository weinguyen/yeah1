// Video data
const videos = {
  video1: {
    title: "Ca sĩ Miho Chu và diễn viên Thanh Thanh nhắn gửi khán giả trước họp báo ra mắt MV “Playlist” | Sao Chat ",
    thumbnail: "./asset/video/1/thumbnails.jpg",
    videoUrl: "https://drive.google.com/file/d/1Wo4CZHBFCoujl39qf5X1uxkkhMvzy9bD/preview",
    description: `
            <p>Xem Full Series  <a
                                href="https://www.youtube.com/watch?v=VnO2deiIy_0&list=PL9L3yQBtrCxu_mJgwWIpslnzm9F_srXn_&index=7">SAO CHAT, CHAT SAO</a></p>
            <ul>
                <li>Ca sĩ Miho Chu và diễn viên Thanh Thanh nhắn gửi khán giả trước họp báo ra mắt MV “Playlist”</li>
                <li>Mini Series: Sao Chat, Chat Sao</li>
                <li>Khách Mời: ca sĩ Chu Minh Hoàng (Miho Chu), diễn viên Trần Thị Thanh Thanh</li>
                <li>Sao Chat, Chat Sao là chương trình mang đến người xem những nội dung phỏng vấn, hỏi - đáp ấn tượng, sâu sắc và nhiều cảm xúc, cũng như là những câu chuyện lần đầu được tiết lộ từ những nghệ sĩ, người nổi tiếng. </li>
          
            </ul>
            <p>#YeaH1 #YeaH1Channel #SaoChatChatSao #miniseries #MV_Playlist</p>

              <div class="highlight-section">
    <h4>🎬 Vai trò sản xuất</h4>
    <ul>
      <li><strong>Đạo diễn:</strong> Sally Nguyễn, Đặng Ngân </li>
      <li><strong>Biên kịch:</strong> Sally Nguyễn</li>
      <li><strong>Quay phim:</strong> Đặng Ngân</li>
      <li><strong>Dựng phim:</strong> Sally Nguyễn</li>
      <li><strong>Diễn viên:</strong> Trần Thị Thanh Thanh, Chu Minh Hoàng (Miho Chu)</li>
    </ul>
  </div>


        `,
  },
  video2: {
    title: "MIHO CHU bật mí hành trình debut: MV đầu tay có gì đặc biệt? | Sao Chat",
    thumbnail: "https://img.youtube.com/vi/Q0D1uImdjbw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/Q0D1uImdjbw?autoplay=1",
    description: `
            <p>Xem Full Series  <a
                                href="https://www.youtube.com/watch?v=VnO2deiIy_0&list=PL9L3yQBtrCxu_mJgwWIpslnzm9F_srXn_&index=7">SAO CHAT, CHAT SAO</a></p>
            <ul>
                <li>Ca sĩ Miho Chu bật mí những câu chuyện đằng sau hành trình ra mắt MV "Playlist" - MV đầu tay của mình và những bí mật chưa từng được hé lộ.”</li>
                <li>Mini Series: Sao Chat, Chat Sao</li>
                <li>Khách Mời: ca sĩ Chu Minh Hoàng (Miho Chu)</li>
                <li>Sao Chat, Chat Sao là chương trình mang đến người xem những nội dung phỏng vấn, hỏi - đáp ấn tượng, sâu sắc và nhiều cảm xúc, cũng như là những câu chuyện lần đầu được tiết lộ từ những nghệ sĩ, người nổi tiếng. </li>
          
            </ul>
            <p>#YeaH1 #YeaH1Channel #SaoChatChatSao #miniseries #MV_Playlist</p>

              <div class="highlight-section">
    <h4>🎬 Vai trò sản xuất</h4>
    <ul>
      <li><strong>Đạo diễn:</strong> Sally Nguyễn, Đặng Ngân </li>
      <li><strong>Biên kịch:</strong> Sally Nguyễn</li>
      <li><strong>Quay phim:</strong> Đặng Ngân</li>
      <li><strong>Dựng phim:</strong> Sally Nguyễn</li>
      <li><strong>Diễn viên:</strong> Chu Minh Hoàng (Miho Chu)</li>
    </ul>
  </div>


        `,
  },
  video3: {
    title: "Chiến lược Content Marketing hiệu quả",
    author: "Đặng Thuỳ Ngân",
    views: "856 lượt xem",
    uploadDate: "5 ngày trước",
    thumbnail: "https://img.youtube.com/vi/tTFLMUVXGmo/maxresdefault.jpg",
    videoUrl: "",
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
    document.getElementById("videoDescription").innerHTML = video.description
    document.getElementById("videoPlayer").src = video.videoUrl

    // Render video khác
    const relatedContainer = document.querySelector(".related-videos-list")
    relatedContainer.innerHTML = ""

    Object.entries(videos).forEach(([id, v]) => {
      if (id !== videoId) {
        const html = `
        <div class="related-video-item" onclick="loadVideo('${id}')">
          <div class="related-thumbnail">
            <img src="${v.thumbnail}" alt="${v.title}" />
            <div class="related-play-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </div>
            <span class="related-duration">10:00</span>
          </div>
          <div class="related-info">
            <h3 class="related-title">${v.title}</h3>
            <p class="related-author">${v.author || "YeaH1 Channel"}</p>
            <p class="related-views">${v.views || ""} ${v.uploadDate ? "• " + v.uploadDate : ""}</p>
          </div>
        </div>
        `
        relatedContainer.insertAdjacentHTML("beforeend", html)
      }
    })
  }
}


function loadVideo(videoId) {
  localStorage.setItem("currentVideo", videoId)
  loadVideoContent(videoId)
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function goBack() {
  window.location.href = "index.html"
}

// Video player functionality
document.addEventListener("DOMContentLoaded", () => {
  const videoPlayer = document.getElementById("videoPlayer")
  const playButton = document.querySelector(".play-button-large")

  if (videoPlayer && playButton) {
    videoPlayer.addEventListener("click", () => {
    })
  }
})
