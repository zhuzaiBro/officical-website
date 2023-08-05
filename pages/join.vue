<template>
  <div class="HeaderPage">
    <img src="../assets/MCM_Join.jpg" alt="">
    <div class="joinText">加入我们</div>
  </div>
    <div class="join-container bigger">
      <h2 class="title">馋喵农 欢迎您</h2>
      <form class="empty-container">
        <div class="form-item">
          <span @click="changeStyle">您的姓名</span>
          <input @focus="changeSpan" @blur="checkIsEmpty" type="text" />
        </div>
        <div class="form-item">
          <span @click="changeStyle">公司/组织名称</span>
          <input @focus="changeSpan" @blur="checkIsEmpty" type="text" />
        </div>
        <div class="form-item">
          <span @click="changeStyle">联系方式: 电话</span>
          <input @focus="changeSpan" @blur="checkIsEmpty" type="text" />
        </div>
        <div class="form-item">
          <div class="get-code">
            <input placeholder="输入验证码" type="text" />
            <button @click.prevent="">获取验证码</button>
          </div>
        </div>
        <button @click.prevent="">一起合作</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import titleControl from "../utils/titleControler";
onMounted(()=>{
  titleControl.setRouteTitle("加入我们 | LITTLE IMP");
})
  const changeStyle = (e) => {
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.focus();
    e.target.classList.add("filled");
  };
  const checkIsEmpty = (e) => {
    if (!e.target.value) {
      e.target.previousElementSibling.classList.remove("filled");
    }
  };
  const changeSpan = (e) => {
    e.target.previousElementSibling.classList.add("filled");
  };
  </script>
  
  <style lang="less" scoped>
  .HeaderPage{
    width: 100%;
    height:100vh;
    img{
      width: 100%;
      height:100vh;
      object-fit: cover;
    }
    .joinText{
      color:#fff;
      font-size: 5rem;
      font-weight: 500;
      letter-spacing: 3rem;
      z-index:1;
      position: absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
    }
  }
  .join-container {
    width: 100%;
    height:fit-content;
    padding: 1rem;
    padding-top: 16rem;
    background:url(../assets/MYN_HomeImg.png);
    &.bigger {
      .empty-container {
        height: auto;
        max-width: 700px;
        width: 60vw;
        background: #fff;
        background-size: 600%;
        animation: change 5s infinite;
        color: #757575;
        display: flex;
        padding: 2rem;
        flex-direction: column;
        line-height: 1.6;
        .form-item {
          margin: 1rem 0;
          display: flex;
          flex-direction: column;
          span {
            transition: 0.2s;
            font-size: 1.5rem;
            transform: translateY(3.3rem);
            padding-left: 1.2rem;
            height: 3.2rem;
          }
          .filled {
            transform: translateY(0);
            position: relative;
            padding-bottom: 0.3rem;
            &::after {
              content: "";
              display: block;
              background-color: #208c38;
              height: 0.4rem;
              left: -0.2rem;
              border-radius: 0.2rem;
              width: 12rem;
              position: absolute;
              bottom: 0.3rem;
            }
          }
          input {
            height: 3.2rem;
            border-radius: 0.8rem;
            outline: none;
            border: none;
            background-color: #f5f5f5;
            padding-left: 1.2rem;
          }
          .get-code {
            display: flex;
            input {
              flex-grow: 1;
              align-items: center;
              margin: auto 0;
              margin-right: 1rem;
            }
            span {
              margin: auto 0;
            }
          }
        }
        button {
          background-color: #208c38;
          border: none;
          border-radius: 1.6rem;
          padding: 1rem;
          outline: none;
          width: 16vw;
          margin: 1rem auto;
          font-size: 1.6rem;
          color: #f5f5f5;
        }
      }
    }
    .title {
      text-align: center;
      color: rgb(61, 61, 61);
      margin-top: -5vh;
      margin-bottom: 3vh;
    }
    .empty-container {
        height: auto;
        margin: 0 auto;
        border-radius: 1rem;
        border: solid #e6f2e6;
        background: #fff;
        background-size: 600%;
        animation: change 5s infinite;
        color: #757575;
        display: flex;
        padding: 2rem;
        flex-direction: column;
        line-height: 1.6;
        .form-item {
          margin: 1rem 0;
          display: flex;
          flex-direction: column;
          span {
            transition: 0.2s;
            font-size: 1.5rem;
            transform: translateY(3.3rem);
            padding-left: 1.2rem;
            height: 3.2rem;
          }
          .filled {
            transform: translateY(0);
            position: relative;
            padding-bottom: 0.3rem;
            &::after {
              content: "";
              display: block;
              background-color: #208c38;
              height: 0.4rem;
              left: -0.2rem;
              border-radius: 0.2rem;
              width: 12rem;
              position: absolute;
              bottom: 0.3rem;
            }
          }
          input {
            height: 3.2rem;
            border-radius: 0.8rem;
            outline: none;
            border: none;
            background-color: #f5f5f5;
            padding-left: 1.2rem;
          }
          .get-code {
            display: flex;
            input {
              flex-grow: 1;
              align-items: center;
              margin: auto 0;
              margin-right: 1rem;
            }
            span {
              margin: auto 0;
            }
          }
        }
        button {
          background-color: #208c38;
          border: none;
          border-radius: 1.6rem;
          padding: 1rem;
          outline: none;
          margin: 1rem auto;
          font-size: 1.6rem;
          color: #f5f5f5;
        }
      }
    
  }
  </style>