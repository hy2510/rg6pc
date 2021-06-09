//홈페이지 상단 공통
let commonTopMenu01 = '../../001_home/002_reading_gate/001_about_rg.html';
let commonTopMenu02 = '../../001_home/003_promotions/001_store_online_ticket.html';
let commonTopMenu03 = '../../001_home/004_ranking/001_ranking_point.html';
let commonTopMenu04 = '../../001_home/005_board/001_board_news.html';
let commonTopMenu05 = '../../001_home/006_payment/001_payment_menu.html';
let commonTopMenu06 = '../../001_home/007_support/001_support_user_guide.html';

function homeCommonTop(text) {
    return $('#homeCommonTop').html(`
    <div class="border-bottom bg-white sticky-top">
		<div class="container px-0">
			<nav class="navbar navbar-expand-lg navbar-light position-relative">
				<div>
					<button class="navbar-toggler border-0 mr-1" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle nav igation">
						<img src="../../../assets/image/homepage/menu2.png"
							srcset="../../../assets/image/homepage/menu2@2x.png 2x" alt="" class="menu-button">
					</button>
					<a class="navbar-brand" href="#"><img src="../../../assets/image/homepage/logo.png"
							srcset="../../../assets/image/homepage/logo@2x.png 2x" alt="" class="logo"></a>
					<!-- <a href="">
                        <img src="https://wcfresource.a1edu.com/newsystem/image/acalogo/001265_top.png" alt=""
                            class="logo" />
                    </a> -->
				</div>
				<div class="collapse navbar-collapse p-2" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link ${text == "Reading Gate - 리딩게이트" ? "active" : ""}" href="${commonTopMenu01}">리딩게이트</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${text == "Reading Gate - 프로모션" ? "active" : ""}" href="${commonTopMenu02}">프로모션</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${text == "Reading Gate - 랭킹" ? "active" : ""}" href="${commonTopMenu03}">랭킹</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${text == "Reading Gate - 게시판" ? "active" : ""}" href="${commonTopMenu04}">게시판</a>
						</li>
						<li class="nav-item">
							<a class="nav-link ${text == "Reading Gate - 결제" ? "active" : ""}" href="${commonTopMenu05}">결제</a>
						</li>
						<li class="nav-item mb-2 mb-lg-0">
							<a class="nav-link ${text == "Reading Gate - 이용 안내" ? "active" : ""}" href="${commonTopMenu06}">이용 안내</a>
						</li>
						<li class="nav-item mb-2 mb-lg-0 d-none">
							<a class="nav-link" href=""><span class="p-2 px-3 bg-primary rounded-100 text-white">Go to
									Study</span></a>
						</li>
					</ul>
				</div>
				<div class="nav-button position-absolute">
					<!-- 언어 선택 버튼 -->
					<div class="btn-group">
						<button id="flag" class="btn px-0 rounded-10" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false">
							<span class="d-flex align-items-center justify-content-center"> <img
									src="../../../assets/image/homepage/flag/kor@2x.png" alt="" height="22"></span>
						</button>
						<div class="dropdown-menu dropdown-menu-right mt-2 py-3 rounded-10 w-100"
							aria-labelledby="flag">
							<div class="px-3 mb-2">
								<a href="" class="txt-dark-16 text-decoration-none">한국어</a>
							</div>
							<div class="px-3 mb-2">
								<a href="" class="txt-dark-16 text-decoration-none">English</a>
							</div>
							<div class="px-3 mb-2">
								<a href="" class="txt-dark-16 text-decoration-none">tiếng Việt</a>
							</div>
							<div class="px-3 mb-2">
								<a href="" class="txt-dark-16 text-decoration-none">中國語</a>
							</div>
							<div class="px-3">
								<a href="" class="txt-dark-16 text-decoration-none">IDN</a>
							</div>
						</div>
					</div>
					<!-- 로그인 버튼 -->
					<button class="btn pl-0">
						<span class="d-flex align-items-center"> <img src="../../../assets/image/homepage/user_icon.png"
								srcset="../../../assets/image/homepage/user_icon@2x.png 2x" alt="" width="14"
								class="mr-2"><span>로그인 /
								가입</span> </span>
					</button>
					<!-- 아바타 버튼 -->
					<div class="btn-group d-none">
						<button id="avatar" class="btn btn-avatar mx-2" data-toggle="dropdown" aria-haspopup="true"
							aria-expanded="false">
							<span class="d-flex align-items-center"> <img
									src="../../../assets/image/icon/dodo_avatar.png"
									srcset="../../../assets/image/icon/dodo_avatar@2x.png 2x" alt="" width="30"
									height="30" /><span class="font-weight-bold txt-dark-16 mx-2">KA</span> </span>
						</button>
						<!-- 주요 학습 정보 -->
						<div class="dropdown-menu common-top dropdown-menu-right mt-2 py-3 rounded-10 mr-2"
							aria-labelledby="avatar">
							<div class="px-3">
								<h6>Hello 이호열</h6>
								<div class="mb-3 txt-dark-16">
									연속 학습 0 일 째
								</div>
								<div class="px-0">
									<div class="mb-3">
										<div>
											<div class="bg-white d-flex justify-content-between p-3 rounded-10">
												<div>
													<div class="mb-2 txt-grey-14">
														오늘 목표 (2020-01-21)
													</div>
													<div class="txt-dark-16">
														<span class="mr-2">1 Point 획득</span>
														<a href="" class="small-link">Edit</a>
													</div>
												</div>
												<div>
													<!--일일학슥목표달성-->
													<div class="bg-primary goal-status ml-auto d-none">
														100%
													</div>
													<!--일일학습목표미달성-->
													<div class="bg-warning goal-status ml-auto">
														90%
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="mb-3">
										<div class="d-flex justify-content-between">
											<div class="dim-per30">
												<div class="bg-white mb-2 py-2 rounded-10 text-center">
													<div class="mb-2 txt-grey-14">
														My Points
													</div>
													<div class="mb-2 txt-dark-18">
														19999.33
													</div>
												</div>
											</div>
											<div class="dim-per30">
												<div class="bg-white mb-2 py-2 rounded-10 text-center">
													<div class="mb-2 txt-grey-14">
														Completed
													</div>
													<div class="mb-2 txt-dark-18">
														5000
													</div>
												</div>
											</div>
											<div class="dim-per30">
												<div class="bg-white mb-2 py-2 rounded-10 text-center">
													<div class="mb-2 txt-grey-14">
														My Level
													</div>
													<div class="mb-2 txt-dark-18">
														<a href="">KA</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									<hr />
									<div>
										<button class="bg-white btn mb-3 py-2 rounded-10 w-100">
											My Info
										</button>
									</div>
									<div>
										<button class="bg-white btn mb-3 py-2 rounded-10 w-100">
											Pre K Workbook MP3
										</button>
									</div>
									<div>
										<button class="btn-dark btn py-2 rounded-10 w-100">
											Log Out
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
    `)
};


let title = $(document).find('title').text();

if (title == 'Reading Gate') {
    homeCommonTop(title);
} else if (title == 'Reading Gate - 리딩게이트') {
    homeCommonTop(title);
} else if (title == 'Reading Gate - 프로모션') {
    homeCommonTop(title);
} else if (title == 'Reading Gate - 랭킹') {
    homeCommonTop(title);
} else if (title == 'Reading Gate - 게시판') {
    homeCommonTop(title);
} else if (title == 'Reading Gate - 결제') {
    homeCommonTop(title);
} else if (title == 'Reading Gate - 이용 안내') {
    homeCommonTop(title);
} else {
    homeCommonTop(title);
};