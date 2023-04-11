import React from "react";

const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">選課系統</h1>
            <p className="col-md-8 fs-4">
              本系統用於老師上傳課程及學生選課使用。
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              看看它怎麼運作。
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>作為一個學生</h2>
              <p>
                學生可以註冊他們喜歡的課程。
              </p>
              <button className="btn btn-outline-light" type="button">
                登錄會員、或者註冊一個帳號
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>作為一個導師</h2>
              <p>
                您可以通過註冊成為一名講師，並開始製作在線課程。
              </p>
              <button className="btn btn-outline-secondary" type="button">
                今天開始開設課程
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeComponent;
