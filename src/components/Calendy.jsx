import logo from "../assets/images/logo.png";
import DemoComponent from "./DateRangePicker";

const Calendy = () => {
  return (
    <section className="rounded-3xl w-full border sm:border-[3px] bg-white border-[#E1E1E1] flex flex-col md:flex-row justify-start items-start divide-x-[1px] md:divide-x-[3px] divide-[#E1E1E1] overflow-hidden">
      <div className="w-full h-full sm:h-[700px] md:w-[65%]">
        <div className="md:border-b-[3px] sm:border-b border-[#E1E1E1] flex justify-center items-center w-full pt-5 pb-10">
          <img src={logo} alt="logo" className="rounded-full md:rounded-none" />{" "}
        </div>

        <div className="h-full overflow-y-auto p-4 lg:p-7">
          <h1 className="font-semibold text-base md:text-xl lg:text-2xl text-[#898989] w-full text-center sm:text-left">
            DataCenters
          </h1>
          <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-[#0C213A] mt-2 w-full text-center sm:text-left">
            Service Discussion
          </h2>

          <div className="w-full space-y-3 mt-7">
            <div className="w-full flex justify-start items-center gap-3 text-[#898989]">
              <svg
                className="w-4 h-4 md:h-6 md:w-6"
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4399 25.2032C14.8849 25.2032 16.3157 24.9186 17.6507 24.3656C18.9856 23.8126 20.1986 23.0021 21.2204 21.9804C22.2421 20.9587 23.0526 19.7457 23.6056 18.4107C24.1586 17.0757 24.4432 15.6449 24.4432 14.1999C24.4432 12.7549 24.1586 11.3241 23.6056 9.98914C23.0526 8.65416 22.2421 7.44117 21.2204 6.41942C20.1986 5.39767 18.9856 4.58718 17.6507 4.03421C16.3157 3.48124 14.8849 3.19664 13.4399 3.19664C10.5217 3.19664 7.72293 4.35591 5.65941 6.41942C3.5959 8.48293 2.43663 11.2817 2.43663 14.1999C2.43663 17.1182 3.5959 19.9169 5.65941 21.9804C7.72293 24.0439 10.5217 25.2032 13.4399 25.2032ZM26.8883 14.1999C26.8883 21.6271 20.8671 27.6484 13.4399 27.6484C6.01269 27.6484 -0.00854492 21.6271 -0.00854492 14.1999C-0.00854492 6.7727 6.01269 0.751465 13.4399 0.751465C20.8671 0.751465 26.8883 6.7727 26.8883 14.1999ZM17.1077 19.5964L12.2173 14.7061V6.2531H14.6625V13.6938L18.8364 17.8677L17.1077 19.5964Z"
                  fill="#898989"
                />
              </svg>

              <p className="font-semibold text-base md:text-lg">30 min</p>
            </div>
            <div className="w-full flex justify-start items-center gap-3 text-[#898989]">
              <svg
                className="w-5 h-5 md:w-7 md:h-7"
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_99_14132" fill="white">
                  <path d="M16.108 5.19524L14.5301 5.67058C13.1252 6.09427 11.8705 6.91049 10.9138 8.02317C9.95704 9.13585 9.33807 10.4987 9.12972 11.9513C8.47612 16.5022 9.93736 21.8234 13.4606 27.9258C16.9751 34.0128 20.8438 37.9344 25.1021 39.6509C26.4703 40.2023 27.9681 40.3493 29.4173 40.0742C30.8666 39.7992 32.2064 39.1138 33.2775 38.0994L34.4703 36.9683C35.2448 36.2353 35.7268 35.246 35.8268 34.1843C35.9268 33.1226 35.6379 32.0607 35.0138 31.196L32.0297 27.0587C31.6263 26.5002 31.0582 26.0819 30.405 25.8625C29.7519 25.6431 29.0465 25.6335 28.3876 25.8352L23.8741 27.215L23.7575 27.237C23.2601 27.3096 22.1114 26.2335 20.681 23.7556C19.1845 21.1632 18.8764 19.6469 19.2879 19.2552L21.5832 17.114C22.4217 16.331 22.9945 15.3055 23.2214 14.1809C23.4483 13.0563 23.3179 11.889 22.8486 10.8421L21.3918 7.60496C20.9537 6.63082 20.1763 5.84923 19.2046 5.40587C18.2329 4.96252 17.1308 4.88765 16.108 5.19524ZM19.3892 8.50723L20.8416 11.7444C21.1235 12.3723 21.202 13.0726 21.0663 13.7473C20.9306 14.422 20.5873 15.0375 20.0846 15.5075L17.7827 17.6509C16.3083 19.0462 16.7968 21.4273 18.7774 24.8559C20.6391 28.0821 22.338 29.6753 24.1646 29.398L24.4375 29.3408L29.0324 27.939C29.2521 27.8715 29.4873 27.8745 29.7052 27.9475C29.923 28.0205 30.1126 28.1599 30.2472 28.3461L33.2313 32.4834C33.5438 32.9157 33.6886 33.4468 33.6388 33.9779C33.589 34.509 33.348 35.0039 32.9606 35.3706L31.7657 36.5018C31.0006 37.2258 30.0437 37.715 29.0088 37.9113C27.9738 38.1075 26.9043 38.0025 25.9273 37.6087C22.1906 36.1034 18.6586 32.523 15.3686 26.8255C12.0698 21.1148 10.734 16.2579 11.3084 12.2637C11.457 11.226 11.8991 10.2523 12.5826 9.45735C13.266 8.66239 14.1624 8.07926 15.1661 7.77661L16.744 7.30127C17.2555 7.14755 17.8056 7.18514 18.2914 7.40703C18.7773 7.62892 19.1659 8.01996 19.3848 8.50723" />
                </mask>
                <path
                  d="M16.108 5.19524L14.5301 5.67058C13.1252 6.09427 11.8705 6.91049 10.9138 8.02317C9.95704 9.13585 9.33807 10.4987 9.12972 11.9513C8.47612 16.5022 9.93736 21.8234 13.4606 27.9258C16.9751 34.0128 20.8438 37.9344 25.1021 39.6509C26.4703 40.2023 27.9681 40.3493 29.4173 40.0742C30.8666 39.7992 32.2064 39.1138 33.2775 38.0994L34.4703 36.9683C35.2448 36.2353 35.7268 35.246 35.8268 34.1843C35.9268 33.1226 35.6379 32.0607 35.0138 31.196L32.0297 27.0587C31.6263 26.5002 31.0582 26.0819 30.405 25.8625C29.7519 25.6431 29.0465 25.6335 28.3876 25.8352L23.8741 27.215L23.7575 27.237C23.2601 27.3096 22.1114 26.2335 20.681 23.7556C19.1845 21.1632 18.8764 19.6469 19.2879 19.2552L21.5832 17.114C22.4217 16.331 22.9945 15.3055 23.2214 14.1809C23.4483 13.0563 23.3179 11.889 22.8486 10.8421L21.3918 7.60496C20.9537 6.63082 20.1763 5.84923 19.2046 5.40587C18.2329 4.96252 17.1308 4.88765 16.108 5.19524ZM19.3892 8.50723L20.8416 11.7444C21.1235 12.3723 21.202 13.0726 21.0663 13.7473C20.9306 14.422 20.5873 15.0375 20.0846 15.5075L17.7827 17.6509C16.3083 19.0462 16.7968 21.4273 18.7774 24.8559C20.6391 28.0821 22.338 29.6753 24.1646 29.398L24.4375 29.3408L29.0324 27.939C29.2521 27.8715 29.4873 27.8745 29.7052 27.9475C29.923 28.0205 30.1126 28.1599 30.2472 28.3461L33.2313 32.4834C33.5438 32.9157 33.6886 33.4468 33.6388 33.9779C33.589 34.509 33.348 35.0039 32.9606 35.3706L31.7657 36.5018C31.0006 37.2258 30.0437 37.715 29.0088 37.9113C27.9738 38.1075 26.9043 38.0025 25.9273 37.6087C22.1906 36.1034 18.6586 32.523 15.3686 26.8255C12.0698 21.1148 10.734 16.2579 11.3084 12.2637C11.457 11.226 11.8991 10.2523 12.5826 9.45735C13.266 8.66239 14.1624 8.07926 15.1661 7.77661L16.744 7.30127C17.2555 7.14755 17.8056 7.18514 18.2914 7.40703C18.7773 7.62892 19.1659 8.01996 19.3848 8.50723"
                  fill="#898989"
                />
                <path
                  d="M16.108 5.19524L12.3563 -7.28074L12.3501 -7.27888L16.108 5.19524ZM14.5301 5.67058L10.7722 -6.80354L10.7686 -6.80246L14.5301 5.67058ZM9.12972 11.9513L22.0253 13.8033L22.0256 13.801L9.12972 11.9513ZM13.4606 27.9258L2.17815 34.4398L2.17822 34.4399L13.4606 27.9258ZM25.1021 39.6509L20.2314 51.734L20.2321 51.7343L25.1021 39.6509ZM33.2775 38.0994L42.2357 47.5586L42.2422 47.5525L33.2775 38.0994ZM34.4703 36.9683L25.5151 27.5062L25.5056 27.5152L34.4703 36.9683ZM35.0138 31.196L24.4477 38.8171L24.4497 38.82L35.0138 31.196ZM32.0297 27.0587L42.5959 19.4376L42.5907 19.4304L32.0297 27.0587ZM28.3876 25.8352L32.1963 38.2939L32.2008 38.2925L28.3876 25.8352ZM23.8741 27.215L26.2896 40.017L26.9957 39.8838L27.6828 39.6737L23.8741 27.215ZM23.7575 27.237L25.6398 40.1282L25.9073 40.0891L26.1729 40.039L23.7575 27.237ZM20.681 23.7556L9.39799 30.2686L9.39806 30.2688L20.681 23.7556ZM19.2879 19.2552L10.4011 9.729L10.3532 9.77368L10.3057 9.81884L19.2879 19.2552ZM21.5832 17.114L30.4701 26.6402L30.4746 26.636L21.5832 17.114ZM22.8486 10.8421L34.7364 5.51238L34.7326 5.50399L34.7288 5.49561L22.8486 10.8421ZM21.3918 7.60496L9.51003 12.9482L9.51152 12.9515L21.3918 7.60496ZM20.8416 11.7444L8.95531 17.0775L8.95639 17.0799L20.8416 11.7444ZM20.0846 15.5075L28.9627 25.0419L28.9724 25.0329L28.9821 25.0238L20.0846 15.5075ZM17.7827 17.6509L8.90458 8.11655L8.86631 8.15219L8.82833 8.18813L17.7827 17.6509ZM18.7774 24.8559L30.0612 18.3442L30.0583 18.3393L18.7774 24.8559ZM24.1646 29.398L26.1199 42.2783L26.4809 42.2236L26.8382 42.1486L24.1646 29.398ZM24.4375 29.3408L27.111 42.0914L27.6815 41.9718L28.239 41.8017L24.4375 29.3408ZM29.0324 27.939L32.834 40.3999L32.8459 40.3963L32.8578 40.3926L29.0324 27.939ZM30.2472 28.3461L40.8134 20.725L40.809 20.7189L40.8046 20.7129L30.2472 28.3461ZM33.2313 32.4834L22.6651 40.1045L22.6726 40.1149L33.2313 32.4834ZM32.9606 35.3706L41.9166 44.8319L41.9168 44.8317L32.9606 35.3706ZM31.7657 36.5018L40.7207 45.9639L40.7216 45.963L31.7657 36.5018ZM25.9273 37.6087L30.7974 25.5253L30.7952 25.5244L25.9273 37.6087ZM15.3686 26.8255L26.6506 20.3108L26.6496 20.309L15.3686 26.8255ZM11.3084 12.2637L24.2036 14.1181L24.2046 14.1114L11.3084 12.2637ZM15.1661 7.77661L11.4082 -4.69751L11.4051 -4.69656L15.1661 7.77661ZM16.744 7.30127L12.9948 -5.17549L12.9861 -5.17285L16.744 7.30127ZM12.3501 -7.27888L10.7722 -6.80354L18.288 18.1447L19.8659 17.6694L12.3501 -7.27888ZM10.7686 -6.80246C6.98732 -5.66213 3.61045 -3.46534 1.03548 -0.470643L20.7921 16.517C20.1306 17.2863 19.263 17.8507 18.2916 18.1436L10.7686 -6.80246ZM1.03548 -0.470643C-1.5395 2.52405 -3.20541 6.19201 -3.76617 10.1015L22.0256 13.801C21.8815 14.8053 21.4536 15.7476 20.7921 16.517L1.03548 -0.470643ZM-3.76584 10.0992C-5.00931 18.7575 -2.04103 27.132 2.17815 34.4398L24.7431 21.4118C21.9158 16.5148 21.9616 14.247 22.0253 13.8033L-3.76584 10.0992ZM2.17822 34.4399C6.38906 41.733 12.1412 48.4729 20.2314 51.734L29.9728 27.5678C29.5464 27.3959 27.561 26.2926 24.743 21.4117L2.17822 34.4399ZM20.2321 51.7343C23.9145 53.2184 27.9457 53.6139 31.8463 52.8737L26.9884 27.2748C27.9904 27.0846 29.026 27.1862 29.9721 27.5675L20.2321 51.7343ZM31.8463 52.8737C35.7469 52.1334 39.353 50.2887 42.2357 47.5586L24.3193 28.6402C25.0599 27.9389 25.9863 27.4649 26.9884 27.2748L31.8463 52.8737ZM42.2422 47.5525L43.4349 46.4213L25.5056 27.5152L24.3128 28.6464L42.2422 47.5525ZM43.4254 46.4304C46.4925 43.5276 48.4014 39.61 48.7973 35.4057L22.8563 32.9629C23.0522 30.882 23.997 28.943 25.5151 27.5062L43.4254 46.4304ZM48.7973 35.4057C49.1932 31.2014 48.0492 26.9963 45.5779 23.572L24.4497 38.82C23.2266 37.1251 22.6603 35.0438 22.8563 32.9629L48.7973 35.4057ZM45.58 23.5748L42.5959 19.4376L21.4636 34.6799L24.4477 38.8171L45.58 23.5748ZM42.5907 19.4304C40.595 16.6675 37.7848 14.5983 34.5539 13.5129L26.2562 38.2121C24.3316 37.5655 22.6576 36.3329 21.4688 34.6871L42.5907 19.4304ZM34.5539 13.5129C31.3231 12.4275 27.8336 12.3802 24.5745 13.3778L32.2008 38.2925C30.2594 38.8868 28.1807 38.8586 26.2562 38.2121L34.5539 13.5129ZM24.579 13.3765L20.0654 14.7563L27.6828 39.6737L32.1963 38.2939L24.579 13.3765ZM21.4586 14.413L21.342 14.435L26.1729 40.039L26.2896 40.017L21.4586 14.413ZM21.8751 14.3458C24.4083 13.9759 26.459 14.4492 27.6674 14.8527C28.9081 15.267 29.8149 15.791 30.3451 16.134C31.3792 16.8031 31.9716 17.4323 32.1229 17.5955C32.4788 17.9794 32.3881 17.9772 31.9638 17.2423L9.39806 30.2688C10.4043 32.0118 11.6031 33.7867 13.0153 35.31C13.6948 36.0428 14.7571 37.0824 16.1911 38.0102C17.1286 38.6168 20.701 40.8493 25.6398 40.1282L21.8751 14.3458ZM31.9639 17.2425C31.4955 16.431 31.6109 16.4479 31.8054 17.1357C31.8912 17.4393 32.1823 18.5181 32.1458 20.0662C32.1166 21.3066 31.8145 25.3179 28.2702 28.6916L10.3057 9.81884C6.55564 13.3884 6.13775 17.7362 6.09729 19.452C6.04959 21.4755 6.43404 23.1689 6.73253 24.2246C7.35226 26.4166 8.36995 28.4877 9.39799 30.2686L31.9639 17.2425ZM28.1748 28.7814L30.4701 26.6402L12.6963 7.58776L10.4011 9.729L28.1748 28.7814ZM30.4746 26.636C33.2987 23.999 35.2278 20.545 35.9919 16.7574L10.4508 11.6044C10.7612 10.066 11.5448 8.66307 12.6919 7.59196L30.4746 26.636ZM35.9919 16.7574C36.7561 12.9698 36.3171 9.03813 34.7364 5.51238L10.9608 16.1719C10.3188 14.7398 10.1405 13.1428 10.4508 11.6044L35.9919 16.7574ZM34.7288 5.49561L33.272 2.25844L9.51152 12.9515L10.9684 16.1886L34.7288 5.49561ZM33.2735 2.26174C31.5387 -1.59584 28.4604 -4.69096 24.6123 -6.44665L13.7969 17.2584C11.8923 16.3894 10.3687 14.8575 9.51004 12.9482L33.2735 2.26174ZM24.6123 -6.44665C20.763 -8.20288 16.4055 -8.49841 12.3563 -7.28074L19.8597 17.6712C17.8562 18.2737 15.7027 18.1279 13.7969 17.2584L24.6123 -6.44665ZM7.50288 13.8403L8.95531 17.0775L32.7279 6.41132L31.2755 3.17415L7.50288 13.8403ZM8.95639 17.0799C8.12582 15.2297 7.89432 13.1662 8.29429 11.178L33.8383 16.3166C34.5097 12.9789 34.1211 9.51486 32.7268 6.40892L8.95639 17.0799ZM8.29429 11.178C8.69426 9.18973 9.70569 7.37626 11.1871 5.9912L28.9821 25.0238C31.4689 22.6987 33.1669 19.6543 33.8383 16.3166L8.29429 11.178ZM11.2065 5.97312L8.90458 8.11655L26.6608 27.1853L28.9627 25.0419L11.2065 5.97312ZM8.82833 8.18813C4.17168 12.5946 3.4611 18.2909 4.10974 22.483C4.66679 26.0832 6.24666 29.209 7.49645 31.3725L30.0583 18.3393C29.3275 17.0742 29.6728 17.2951 29.8591 18.4988C29.9733 19.2368 30.0711 20.628 29.5956 22.3504C29.086 24.196 28.0719 25.8507 26.7371 27.1138L8.82833 8.18813ZM7.4936 31.3675C8.68869 33.4385 10.4421 36.1127 12.9565 38.2898C15.7178 40.6807 20.2939 43.1628 26.1199 42.2783L22.2093 16.5177C23.9934 16.2469 25.7353 16.4626 27.2392 17.0057C28.6467 17.514 29.563 18.2031 30.0119 18.5917C30.7548 19.2349 30.7278 19.4995 30.0612 18.3442L7.4936 31.3675ZM26.8382 42.1486L27.111 42.0914L21.7639 16.5902L21.491 16.6475L26.8382 42.1486ZM28.239 41.8017L32.834 40.3999L25.2309 15.4781L20.6359 16.8799L28.239 41.8017ZM32.8578 40.3926C30.4769 41.1239 27.9268 41.0916 25.5653 40.3001L33.8451 15.5949C31.0478 14.6574 28.0272 14.6191 25.2071 15.4854L32.8578 40.3926ZM25.5653 40.3001C23.2036 39.5086 21.1491 37.9977 19.6898 35.9794L40.8046 20.7129C39.0761 18.3222 36.6425 16.5325 33.8451 15.5949L25.5653 40.3001ZM19.681 35.9673L22.6651 40.1045L43.7975 24.8622L40.8134 20.725L19.681 35.9673ZM22.6726 40.1149C21.1353 37.9878 20.4228 35.3748 20.6678 32.7618L46.6098 35.1939C46.9543 31.5187 45.9523 27.8435 43.79 24.8518L22.6726 40.1149ZM20.6678 32.7618C20.9127 30.1489 22.0984 27.7138 24.0044 25.9096L41.9168 44.8317C44.5975 42.294 46.2652 38.8691 46.6098 35.1939L20.6678 32.7618ZM24.0046 25.9093L22.8097 27.0405L40.7216 45.963L41.9166 44.8319L24.0046 25.9093ZM22.8106 27.0396C23.8572 26.0491 25.1662 25.3798 26.582 25.1114L31.4356 50.7111C34.9213 50.0502 38.144 48.4026 40.7207 45.9639L22.8106 27.0396ZM26.582 25.1114C27.9978 24.843 29.4609 24.9866 30.7974 25.5253L21.0572 49.692C24.3478 51.0183 27.9499 51.372 31.4356 50.7111L26.582 25.1114ZM30.7952 25.5244C30.9403 25.5829 30.5765 25.4773 29.7804 24.6658C28.974 23.8438 27.8993 22.4733 26.6506 20.3108L4.08656 33.3402C8.0133 40.1404 13.4191 46.6152 21.0595 49.6929L30.7952 25.5244ZM26.6496 20.309C25.3967 18.1402 24.7464 16.5218 24.4383 15.4129C24.1343 14.3189 24.2268 13.9565 24.2036 14.1181L-1.58686 10.4094C-2.76316 18.5894 0.152993 26.5306 4.08757 33.3419L26.6496 20.309ZM24.2046 14.1114C24.0012 15.531 23.3964 16.863 22.4614 17.9505L2.70375 0.964167C0.40189 3.64158 -1.08707 6.92093 -1.58782 10.4161L24.2046 14.1114ZM22.4614 17.9505C21.5265 19.038 20.3002 19.8358 18.9272 20.2498L11.4051 -4.69656C8.02454 -3.67723 5.00562 -1.71324 2.70375 0.964167L22.4614 17.9505ZM18.924 20.2507L20.5019 19.7754L12.9861 -5.17285L11.4082 -4.69751L18.924 20.2507ZM20.4931 19.778C17.9763 20.5343 15.2702 20.3494 12.8796 19.2577L23.7032 -4.44362C20.3409 -5.9791 16.5348 -6.23922 12.9948 -5.17549L20.4931 19.778ZM12.8796 19.2577C10.4891 18.166 8.57716 16.2421 7.50046 13.8447L31.2691 3.16975C29.7547 -0.202144 27.0656 -2.90815 23.7032 -4.44362L12.8796 19.2577Z"
                  fill="#898989"
                  mask="url(#path-1-inside-1_99_14132)"
                />
              </svg>

              <p className="font-semibold text-base md:text-lg">Phone call</p>
            </div>
          </div>

          <p className="text-[#3A3A3A] mt-5 text-sm md:text-base lg:text-lg">
            Let's discuss your most urgent hiring needs and some quick
            strategies on how we can help from day 1 with one of our Team
            Builders who has over 10 years of experience in the industry.
            <br />
            <br />
            From there, our team will develop methods and strategies for
            continued service in order to meet your company's hiring goals and
            vision!
            <br />
            <br />
            Please schedule at your earliest convenience, we look forward to
            speaking with you.
          </p>
        </div>
      </div>

      <div className="w-full border-t-[1px] md:border-t-2 border-[#E1E1E1] p-4 md:p-6 h-[700px] md:w-[45%] flex-auto flex flex-col">
        {/* <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-[#0C213A] mt-2 w-full text-center sm:text-left">
          Select a Date & Time
        </h2> */}

        {/* <div className="w-full "> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Calendy;
