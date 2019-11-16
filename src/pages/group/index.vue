<template>
  <div>
    <Header />
    <div class="group-page">
      <div class="card">
        <div class="group-home-container">
          <div style="display: block;">
            <div class="group-home">
              <section class="mixed-rec-groups">
                <a href="#" class="item">
                  <img src="https://img3.doubanio.com/img/files/file-1518324854.png" alt />
                </a>
                <a href="#" class="item">
                  <img src="https://img3.doubanio.com/img/files/file-1518324854.png" alt />
                </a>
                <a href="#" class="item">
                  <img src="https://img3.doubanio.com/img/files/file-1518324854.png" alt />
                </a>
                <a href="#" class="item">
                  <img src="https://img3.doubanio.com/img/files/file-1518324854.png" alt />
                </a>
                <a href="#" class="item">
                  <img src="https://img3.doubanio.com/img/files/file-1518324854.png" alt />
                </a>
              </section>
              <section class="nav-menu">
                <ul>
                  <li class="item">
                    <a href="#!/topics/newest">小组最新话题</a>
                  </li>
                  <li class="item">
                    <a href="#!/topics/mine">我发表的话题</a>
                  </li>
                  <li class="item">
                    <a href="#!/topics/replied">我回应的话题</a>
                  </li>
                  <li class="item">
                    <a href="#!/topics/history">最近浏览</a>
                  </li>
                </ul>
              </section>

              <section>
                <h2>我的小组</h2>
                <div>
                  <ul class="group-list base-list">
                    <div class="message">你还没有加入任何小组</div>
                  </ul>
                  <!-- react-empty: 19 -->
                </div>
              </section>
              <section>
                <h2>发现小组</h2>
                <div>
                  <ul class="group-list base-list">
                    <li class="has-add-btn len-2">
                      <a href="/group/32075">
                        <img
                          src="https://img3.doubanio.com/view/group/sqxs/public/79804a41854ea50.jpg"
                          alt="离婚的心路"
                          class="avatar"
                        />
                        <div class="detail" data-one-line="0">
                          <h1>离婚的心路</h1>
                          <h4>19612人</h4>
                        </div>
                        <div class="btn btn-add">加入</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Header from "@common/components/header";
export default {
  name: "Group",
  components: {
    Header,
  },
  
};
</script>

<style>
.group-page {
  max-width: 6.5rem;
  padding-top: 0px;
  background: #fff;
  margin: 0 auto;
  overflow-x: hidden;
}
.card {
  margin: 0 0.18rem;
}
.mixed-rec-groups {
  word-break: keep-all;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 0.3rem;
}
section {
  margin-bottom: 0.3rem;
}
.group-home .mixed-rec-groups .item,
.group-home .mixed-rec-groups .item img {
  width: 1.9rem;
  height: 0.8rem;
  display: inline-block;
}
.group-home .mixed-rec-groups .item {
  margin-right: 0.1rem;
}
.group-home .nav-menu {
  overflow: hidden;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.group-home .nav-menu .item:nth-child(2n + 1) {
  padding-right: 0.05rem;
}
.group-home .nav-menu .item {
  box-sizing: border-box;
  width: 50%;
  padding-bottom: 0.05rem;
  float: left;
}
.group-home .nav-menu .item a {
  background-color: #f6f6f6;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 0.15rem 0;
  text-align: center;
  color: #494949;
  line-height: 1.2;
  font-size: 0.15rem;
}
.group-home section {
  margin-top: 0.4rem;
}
h2 {
  color: #818181;
  margin: 0 0 15px;
  font-size: 15px;
}
.base-list {
  margin: 0;
  padding: 0;
  position: relative;
}
.group-home .message,
.topic-list-section .message {
  font-size: 0.15rem;
  color: #818181;
  padding-top: 0.2rem;
  margin-left: 1rem;
}
.group-list li.has-add-btn.len-2 {
  padding-right: 8.5rem;
}
.group-list li {
  cursor: pointer;
  position: relative;
}
.base-list > li {
  padding: 0.15rem 0.18rem 0.15rem 0;
}
.group-list li .avatar {
  width: 0.36rem;
  height: 0.36rem;
  float: left;
  margin-right: 0.1rem;
}
.group-list li .detail {
  min-height: 0.36rem;
  width: 2.62rem;
}
.group-list li .detail h1 {
  font-size: 17px;
  font-weight: 500;
  color: #494949;
}
.group-list li .detail h4 {
  font-size: 12px;
  line-height: 1.2;
  color: #ccc;
  margin-top: 0.05rem;
}
.group-list li.has-add-btn .btn {
  cursor: pointer;
  border-radius: 4px;
  border: solid 1px #42bd56;
  font-size: 14px;
  line-height: 1.2;
  color: #42bd56;
  padding: 0.05rem 0.15rem;
  position: absolute;
  right: 5.18rem;
  top: 0.15rem;
}
.group-list li .detail h1,
.group-list li .detail h4 {
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
</style>