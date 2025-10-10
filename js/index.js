$(window).load(function () {
    $('.loading').fadeOut('fast');

    var targetDate = new Date(2025, 9, 17); // 2024년 10월 17일
    var currentDate = new Date(); // 현재 시간
    var devTest = false // 테스트를 위한 변수

    // 10월 17일보다 시간이 작을 경우 타이머를 설정
    if (currentDate >= targetDate || devTest) {
        // 10월 17일보다 시간이 클 경우 .container를 페이드 인
        $("countdown-timer").hide();
        $('.container').fadeIn('fast');
    } else {
        var countDown = new IOWA.CountdownTimer.Core(
            targetDate,
            document.querySelector('countdown-timer')
        );

        countDown.setUp(false);
        countDown.attachEvents();
        countDown.play(false);

        // 1초마다 현재 시간을 확인
        var timerInterval = setInterval(checkTime, 1000);
    }

    // 함수: 시간을 체크하여 조건을 실행
    function checkTime() {
        var currentDate = new Date(); // 매번 새로운 현재 시간
        if (currentDate >= targetDate || devTest) {
            // 10월 17일보다 시간이 크거나 같을 경우 .container를 페이드 인
            $("countdown-timer").hide();
            $('.container').fadeIn('fast');
            clearInterval(timerInterval); // 타이머 중지
        }
    }
});

$(document).ready(function() {
    $(".download-btn").on("click", function (e) {
        e.preventDefault();

        const $btn = $(this);
        const $status = $(".status");

        $btn.text("다운로드 중...");
        $status.fadeIn();

        setTimeout(() => {
            $btn.text("다운로드 완료 🎉");
            $btn.css({
                background: "linear-gradient(90deg, #34c759, #28a745)",
                boxShadow: "0 4px 15px rgba(40,167,69,0.3)"
            });
            $status.text("설치가 자동으로 시작됩니다.").fadeIn();
        }, 2000);

        // 실제 .ipa 파일 또는 manifest.plist 링크로 변경하세요 👇
        setTimeout(() => {
            window.location.href = "itms-services://?action=download-manifest&url=https://yourdomain.com/manifest.plist";
        }, 3000);
    });
});