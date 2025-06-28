// 관리자 비밀번호 (실제 사용 시 더 안전한 방법으로 변경하세요)
const ADMIN_PASSWORD = "dudtlrdl80*";

// 블로그 포스트 데이터 (로컬 스토리지에서 관리)
let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [
    {
        id: 1,
        title: "강력한 비밀번호 만드는 법",
        summary: "해킹으로부터 계정을 보호하는 강력한 비밀번호 생성 방법과 관리 팁을 알아봅니다.",
        content: "비밀번호는 디지털 보안의 첫 번째 방어선입니다. 강력한 비밀번호를 만드는 방법과 안전하게 관리하는 팁을 소개합니다.",
        tags: ["비밀번호", "계정", "보호", "생성", "관리", "팁"],
        date: "2024.01.15",
        icon: "🔐"
    },
    {
        id: 2,
        title: "피싱 이메일 구별하는 방법",
        summary: "악의적인 피싱 이메일을 구별하고 안전하게 처리하는 방법을 배워봅니다.",
        content: "피싱 이메일은 개인정보를 탈취하려는 악의적인 시도입니다. 피싱 이메일의 특징과 대응 방법을 알아봅니다.",
        tags: ["피싱", "이메일", "보안", "악의적인", "시도"],
        date: "2024.01.10",
        icon: "📧"
    },
    {
        id: 3,
        title: "2단계 인증의 중요성",
        summary: "2단계 인증(2FA)을 설정하는 방법과 왜 중요한지에 대해 알아봅니다.",
        content: "2단계 인증은 계정 보안을 크게 향상시키는 방법입니다. 설정 방법과 보안 효과에 대해 설명합니다.",
        tags: ["2단계", "인증", "보안", "효과", "설정"],
        date: "2024.01.05",
        icon: "🔒"
    },
    {
        id: 4,
        title: "공용 Wi-Fi 사용 시 주의사항",
        summary: "카페나 공공장소의 무료 Wi-Fi를 안전하게 사용하는 방법을 알아봅니다.",
        content: "공용 Wi-Fi는 편리하지만 보안 위험이 따릅니다. 안전하게 사용하는 방법과 주의사항을 알아봅니다.",
        tags: ["공용", "Wi-Fi", "보안", "위험", "주의사항"],
        date: "2024.01.01",
        icon: "💻"
    }
];

// 페이지 로드 시 블로그 포스트 렌더링
document.addEventListener('DOMContentLoaded', function() {
    renderBlogPosts();
    updateFooterYear();
    setupLevelCardActivation();
});

// 부드러운 스크롤 기능
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 헤더 스크롤 효과
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// 스킬 태그 애니메이션
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// 페이지 로드 시 애니메이션
window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.blog-card, .skill-tag');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});

// 스크롤 시 요소 페이드인 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 관찰할 요소들
document.querySelectorAll('.blog-card, .skill-tag, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 현재 연도 자동 업데이트
function updateFooterYear() {
    const year = new Date().getFullYear();
    const footer = document.querySelector('.footer p');
    footer.innerHTML = `&copy; ${year} Base is under attack. 모든 권리 보유.`;
}

// 블로그 포스트 렌더링 함수
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    blogGrid.innerHTML = '';
    
    blogPosts.forEach(post => {
        const postElement = createBlogPostElement(post);
        blogGrid.appendChild(postElement);
    });
}

// 블로그 포스트 요소 생성
function createBlogPostElement(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.onclick = (e) => {
        // 삭제 버튼 클릭 시 상세보기 막기
        if (e.target.classList.contains('delete-btn')) return;
        showPostDetail(post);
    };
    
    // 태그 HTML
    const tagsHtml = post.tags && post.tags.length > 0
        ? `<div class="post-tags">${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}</div>`
        : '';
    
    // 삭제 버튼 HTML
    const deleteBtnHtml = `<button class="delete-btn" title="삭제">&times;</button>`;
    
    article.innerHTML = `
        <div class="blog-card-image" style="position:relative;">
            <div class="image-placeholder">${post.icon}</div>
            <div style="position:absolute;top:10px;right:10px;z-index:2;">${deleteBtnHtml}</div>
        </div>
        <div class="blog-card-content">
            <h3>${post.title}</h3>
            <p>${post.summary}</p>
            ${tagsHtml}
        </div>
    `;
    
    // 삭제 버튼 이벤트
    article.querySelector('.delete-btn').onclick = function(e) {
        e.stopPropagation();
        const input = prompt('관리자 비밀번호를 입력하세요.');
        if (input === ADMIN_PASSWORD) {
            // 삭제
            blogPosts = blogPosts.filter(p => p.id !== post.id);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
            renderBlogPosts();
            alert('포스트가 삭제되었습니다.');
        } else {
            alert('비밀번호가 올바르지 않습니다.');
        }
    };
    
    return article;
}

// 글쓰기 폼 제출 처리
document.getElementById('writeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const summary = document.getElementById('summary').value;
    const content = document.getElementById('content').value;
    const adminPassword = document.getElementById('adminPassword').value;
    
    // 관리자 비밀번호 확인
    if (adminPassword !== ADMIN_PASSWORD) {
        showModal('errorModal');
        return;
    }
    
    // 태그 자동 추출 (요약에서 중복 없이 최대 8개)
    const tags = Array.from(new Set(summary.split(/\s+/).map(w => w.replace(/[^\w가-힣]/g, "")).filter(Boolean))).slice(0, 8);
    
    // 새 포스트 생성
    const newPost = {
        id: Date.now(),
        title: title,
        summary: summary,
        content: content,
        tags: tags,
        date: new Date().toLocaleDateString('ko-KR'),
        icon: '📝'
    };
    
    // 포스트 추가
    blogPosts.unshift(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    
    // 블로그 목록 업데이트
    renderBlogPosts();
    
    // 폼 초기화
    this.reset();
    
    // 성공 모달 표시
    showModal('successModal');
});

// 모달 표시 함수
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    
    // 모달 외부 클릭 시 닫기
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    };
    
    // X 버튼 클릭 시 닫기
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = closeModal;
}

// 모달 닫기 함수
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

// 포스트 상세 보기 (간단한 alert로 구현)
function showPostDetail(post) {
    const detailText = `
제목: ${post.title}
카테고리: ${post.tags.join(', ')}
작성일: ${post.date}

내용:
${post.content}
    `;
    alert(detailText);
}

// 전역 함수로 모달 닫기 함수 노출
window.closeModal = closeModal;

// 레벨카드 활성화 토글
function setupLevelCardActivation() {
    const lv1 = document.getElementById('lv1-card');
    const lv2 = document.getElementById('lv2-card');
    if (!lv1 || !lv2) return;
    lv1.onclick = function() {
        lv1.classList.add('active');
        lv2.classList.remove('active');
    };
    lv2.onclick = function() {
        lv2.classList.add('active');
        lv1.classList.remove('active');
    };
} 