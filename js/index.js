$(window).load(function () {
    $('.loading').fadeOut('fast');

    var targetDate = new Date(2024, 9, 17); // 2024년 10월 17일
    var currentDate = new Date(); // 현재 시간
    var devTest = false // 테스트를 위한 변수

    // 10월 17일보다 시간이 작을 경우 타이머를 설정
    if (currentDate >= targetDate || devTest) {
        // 10월 17일보다 시간이 클 경우 .container를 페이드 인
        $("countdown-timer").hide();
        $('.card').fadeIn('fast');
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
            $('.card').fadeIn('fast');
            clearInterval(timerInterval); // 타이머 중지
        }
    }
});