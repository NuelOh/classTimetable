
// 강의명 입력하면 savedClassName 에 저장됨
const $className = document.querySelector('#className');
let savedClassName = '';

const inputClassName = (event) => {
  savedClassName = event.target.value;
}

$className.addEventListener('input', inputClassName);



// 강의 요일 선택하면 savedClassDay 에 저장됨
const classDayLength = document.getElementsByName('classDay').length;
const $classDayAll = document.getElementsByName('classDay');
const $monday = document.querySelector('#monday');
const $tuesday = document.querySelector('#tuesday');
const $wednesday = document.querySelector('#wednesday');
const $thursday = document.querySelector('#thursday');
const $friday = document.querySelector('#friday');
let savedClassDay = '';

const whichDaysAreChecked = () => {
  for(let a = 0; a < classDayLength; a++){
    if($classDayAll[a].checked){
      savedClassDay = $classDayAll[a].value;
    }
  }
}


// 강의시간 체크하고 버튼 누르면 칸에 뜨게
const classTimeLength = document.getElementsByName('classOrder').length;
const $classTimeAll = document.getElementsByName('classOrder');
let savedClassTime = [];


// 확정버튼 클릭하면 선택한 요일(savedClassDay)와 선택한 교시(savedClassTime)이 빈칸에 등장
const whichTimesAreChecked = () => {
  for(let b = 0; b < classTimeLength; b++) {
    if($classTimeAll[b].checked) {
      savedClassTime.push($classTimeAll[b].value);
    }
  }
}

const eraseDayAndTimeCheckbox = () => {
  for(let d = 0; d < classDayLength; d++){
    $classDayAll[d].checked = false;
  }
  for(let e = 0; e < classTimeLength; e++){
    $classTimeAll[e].checked = false;
  }
}


// 색깔 선택하면 savedClassColor 에 저장됨
const $classColor = document.querySelector('#classColor');
const $selectedColor = document.querySelector('#selectedColor');
let savedClassColor = '';
const selectColor = (event) => {
  $selectedColor.style.backgroundColor = event.target.value;
  savedClassColor = event.target.value;
}

$classColor.addEventListener('input', selectColor);



// 초기화 버튼 누르면 전부 초기화
const $reset = document.querySelector('#reset');

const onClickReset = () => {
  $className.value = '';
  $classColor.value = '#030303';
  $selectedColor.style.backgroundColor = '#ffffff';
  eraseDayAndTimeCheckbox();
  savedClassName = '';
  savedClassDay = '';
  savedClassColor = '';
  savedClassTime = [];
}

$reset.addEventListener('click', onClickReset);



// 시간표 등록 버튼 누르면 오른쪽 시간표에 등록
const $confirm = document.querySelector('#confirm');
const dayLength = document.getElementsByName('mon').length;
const mondayAll = document.getElementsByName('mon');
const tuesdayAll = document.getElementsByName('tue');
const wednesdayAll = document.getElementsByName('wed');
const thursdayAll = document.getElementsByName('thu');
const fridayAll = document.getElementsByName('fri');

// savedClassName 입력한 강의명
// savedClassDay 입력한 강의요일(1개)
// savedClassTime 선택한 강의교시(여러개)
// savedClassColor 선택한 강의색깔

const selectCheckedDay = () => {
  for (let x = 0; x < dayLength; x++) {
    if (savedClassDay === '월') {
      for (let y = 0; y < mondayAll.length; y++) {
        for (let z = 0; z < savedClassTime.length; z++) {
          if (savedClassTime[z] === mondayAll[y].value) {
            mondayAll[y].style.backgroundColor = savedClassColor;
            mondayAll[y].value = savedClassName;
            mondayAll[y].checked = true;
          }
        }
      }
    } else if (savedClassDay === '화') {
      for (let y = 0; y < tuesdayAll.length; y++) {
        for (let z = 0; z < savedClassTime.length; z++) {
          if (savedClassTime[z] === tuesdayAll[y].value) {
            tuesdayAll[y].style.backgroundColor = savedClassColor;
            tuesdayAll[y].value = savedClassName;
          }
        }
      }
    } else if (savedClassDay === '수') {
      for (let y = 0; y < wednesdayAll.length; y++) {
        for (let z = 0; z < savedClassTime.length; z++) {
          if (savedClassTime[z] === wednesdayAll[y].value) {
            wednesdayAll[y].style.backgroundColor = savedClassColor;
            wednesdayAll[y].value = savedClassName;
          }
        }
      }
    } else if (savedClassDay === '목') {
      for (let y = 0; y < thursdayAll.length; y++) {
        for (let z = 0; z < savedClassTime.length; z++) {
          if (savedClassTime[z] === thursdayAll[y].value) {
            thursdayAll[y].style.backgroundColor = savedClassColor;
            thursdayAll[y].value = savedClassName;
          }
        }
      }
    } else if (savedClassDay === '금') {
      for (let y = 0; y < fridayAll.length; y++) {
        for (let z = 0; z < savedClassTime.length; z++) {
          if (savedClassTime[z] === fridayAll[y].value) {
            fridayAll[y].style.backgroundColor = savedClassColor;
            fridayAll[y].value = savedClassName;
          }
        }
      }
    }
  }
}

const onClickConfirm = () => {
  whichDaysAreChecked();
  whichTimesAreChecked();
  selectCheckedDay();
  savedClassTime = [];
  eraseDayAndTimeCheckbox();
}

$confirm.addEventListener('click', onClickConfirm);