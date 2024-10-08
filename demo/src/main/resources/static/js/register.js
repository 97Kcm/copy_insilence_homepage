IMP.init("imp26750511");


/**********************   본인 인증하기   ************************/
const certificationBtn = document.getElementById('certification-button');
const impUidInput = document.getElementById("imp-uid");

certificationBtn.onclick = () => {
    IMP.certification(
        {
            // param
            // 주문 번호
            pg: "inicis_unified.MIIiasTest", //본인인증 설정이 2개이상 되어 있는 경우 필
            merchant_uid: "ORD20180131-0000011",
            // 모바일환경에서 popup:false(기본값) 인 경우 필수
            m_redirect_url: "/user/login",
            // PC환경에서는 popup 파라미터가 무시되고 항상 true 로 적용됨
            popup: true,
        },
        function (rsp) {
            // callback
            if (rsp.success) {
                // 인증 성공 시 로직
                console.log(rsp)
                certificationBtn.disabled = true;
                certificationBtn.style.backgroundColor = "rgba(0.7,0.7,0.7,0.3)";
                certificationBtn.style.border = "none";
                impUidInput.value = rsp["imp_uid"];
            } else {
                // 인증 실패 시 로직
                alert("인증에 실패하였습니다. 다시 인증을 해주시기 바랍니다.");
            }
        },
    );
}

/******************** 주소 검색하기 버튼 클릭 시 *********************/
const findAddressBtn = document.getElementById('find-address-btn');
const postCode = document.getElementById('post-code');
const basicAddress = document.getElementById('basic-address');
const extraAddress = document.getElementById('extra-address');

findAddressBtn.onclick = () => {
    new daum.Postcode({
        oncomplete: function(data) {
            //data는 사용자가 선택한 주소 정보를 담고 있는 객체이며, 상세 설명은 아래 목록에서 확인하실 수 있습니다.
            postCode.value = data.zonecode;
            basicAddress.value = data.address;
        }
    }).open();
}

/********************** 아이디 중복 검사 ************************/
const idInput = document.getElementById('id-input');
const idInvisibleSection = document.querySelector('.invisible-section.id');

idInput.onblur = () => {
    const id = idInput.value;
    fetch(`/user/searchId?id=${id}`)
        .then(rsp => {
            return rsp;
        })
        .then(result => {
            if(result){
                idInvisibleSection.textContent = "사용가능한 아이디입니다.";
            }else{
                idInvisibleSection.textContent = "이미 존재하는 아이디입니다.";
                idInvisibleSection.style.color = "crimson";
            }
        }).catch(error => {
            console.log("Error : " + error);
    })
}


/*************** 회원가입 버튼 클릭 시 ******************/
const signUpBtn = document.getElementById('signUp-btn');
const fullAddressInput = document.getElementById('full-address-input');
const fullPhoneNumberInput = document.getElementById('full-phoneNumber-section');
const firstNumberInput = document.getElementById('first-number-input');
const middleNumberInput = document.getElementById('middle-number-input');
const lastNumberInput = document.getElementById('last-number-input');



signUpBtn.onclick = () => {
    fullAddressInput.value = postCode.value + "." + basicAddress.value + "." + extraAddress.value;
    fullPhoneNumberInput.value = firstNumberInput.value + "-" + middleNumberInput.value + "-" + lastNumberInput.value;
    if(certificationBtn.disabled){
        certificationBtn.type = 'submit';
    }else{
        certificationBtn.type = 'button';
        alert("본인인증을 해주세요");
    }
}

