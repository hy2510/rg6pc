// qna.json 가져오기

function loadQna() {
    return fetch('../../../assets/js/qna.json')
        .then(Response => Response.json())
        .then(json => json.qnaItems);
}

function diplayQna(qnaItems) {
    const container = document.querySelector('.qna-item');
    container.innerHTML = qnaItems.map((qnaItems, index) => qnaList(qnaItems, index)).join('');
}

// FAQ 리스트 및 모달 출력

function qnaList(qnaItems, index) {
    return `
    <div class="row p-3">
        <div class="col-1 d-none d-lg-block">${index+1}</div>
        <div class="col-12 col-lg-3 text-lg-left font-weight-bold">${qnaItems.type}</div>
        <div class="col-12 col-lg-8 text-truncate mb-2 mb-lg-0"><a href="" data-toggle="modal"
            data-target="#faqPopup${index+1}" class="txt-dark-16 text-decoration-none">${qnaItems.title}</a>
        </div>
    </div>

    <div class="modal fade" id="faqPopup${index+1}">
		<div class="modal-dialog">
			<div class="modal-content rounded-10">
				<div class="modal-header">
					<h5 class="modal-title text-truncate" id="staticBackdropLabel">FAQ</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
				</div>
				<div class="modal-body">
					<!-- 제목 -->
					<h4 class="mt-3 mb-4 px-md-3">${qnaItems.title}</h4>
					<!-- 내용 -->
					<p class="px-md-3 pb-md-2">
                    ${qnaItems.content}
					</p>
				</div>
			</div>
		</div>
	</div>
    `
};

loadQna().then(items => {
    diplayQna(items);
});