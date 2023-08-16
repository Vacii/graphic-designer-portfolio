import React from "react";
import "../assets/main.css";

export const Main = () => {
  return (
    <>
      <main className="h-screen flex flex-col justify-center items-center">
        <div className="green-blur"></div>
        <svg
          className="svg-white-home"
          xmlns="http://www.w3.org/2000/svg"
          width="154"
          height="136"
          viewBox="0 0 154 136"
          fill="none"
        >
          <path
            d="M-281.409 -3.2124C-255.462 -9.97525 -234.046 -22.0197 -210.861 -2.10611C-194.412 12.0219 -186.165 32.0471 -162.142 35.9819C-127.948 41.5826 -87.7867 9.07249 -74.1934 -19.6487C-60.1303 -49.3626 -29.0427 -70.1503 4.89671 -56.9465C23.8591 -49.5694 31.4039 -26.0259 49.9781 -18.3844C60.1911 -14.1827 72.9805 -21.7682 82.2468 -25.1012C94.1062 -29.3668 106.985 -31.6311 119.577 -29.6053C138.726 -26.5247 150.609 -11.0211 152.479 7.85051C153.679 19.9574 152.817 33.1481 149.79 44.9113C146.808 56.4971 139.773 61.8437 132.153 70.1189C128.466 74.1221 124.026 80.0422 123.215 85.607C122.273 92.081 127.971 96.9605 129.859 102.754C136.156 122.077 101.68 127.765 89.6813 128.594C65.9359 130.235 41.3186 126.349 26.6465 105.915C15.3853 90.2316 17.6189 65.9406 -0.00687462 54.9469C-12.3828 47.2276 -30.9182 44.3334 -44.0601 51.628C-61.2902 61.1919 -66.0723 82.8497 -78.7806 96.4328C-100.999 120.181 -133.98 141.266 -168.39 131.597C-178.027 128.889 -185.821 120.421 -192.829 113.738C-202.375 104.633 -213.171 96.5324 -224.623 89.9531C-237.668 82.4584 -255.695 79.0605 -269.941 85.0538C-276.735 87.9119 -281.909 93.7522 -289.318 94.9314C-299.476 96.5479 -308.158 95.7127 -317 90.6643"
            stroke="#F6F0E4"
            strokeOpacity="0.51"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="svg-gray-home"
          xmlns="http://www.w3.org/2000/svg"
          width="126"
          height="133"
          viewBox="0 0 126 133"
          fill="none"
        >
          <path
            d="M201.902 5.85147C182.999 10.9412 160.985 18.6762 141.267 18.6762C131.326 18.6762 122.666 10.6205 114.037 6.64312C102.696 1.41589 90.1692 -2.44686 79.0494 5.69314C64.6113 16.2622 61.602 36.6745 54.3522 51.9255C49.4532 62.2312 41.3134 68.9471 30.2883 71.9542C23.6039 73.7774 15.5665 70.8669 9.23239 73.4583C2.62294 76.1625 1 86.0422 1 92.2996C1 106.975 10.7676 117.248 22.7683 124.599C43.5848 137.35 68.1926 128.856 88.1525 118.187C93.9625 115.081 98.591 108.22 104.221 105.916C112.313 102.605 122.728 104.174 131.373 104.174C137.378 104.174 141.57 100.016 147.758 99.8994C159.638 99.6753 174.214 106.302 185.516 101.879C192.108 99.2988 195.136 91.8853 200.635 87.8664C206.194 83.8037 212.152 81.3748 219 81.3748"
            stroke="#446A63"
            strokeOpacity="0.27"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex flex-col items-center gap-[32px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="68"
            viewBox="0 0 212 68"
            fill="none"
          >
            <g clipPath="url(#clip0_63_5)">
              <path
                d="M207.134 64.4295C207.025 64.3334 206.932 64.2374 206.839 64.1413C206.529 63.773 206.39 63.3087 206.266 62.8444C205.863 61.2272 205.491 59.1778 205.258 57.5446C204.034 49.2187 202.546 40.9249 201.089 32.631C200.655 30.1813 200.237 27.7316 199.803 25.2818C199.384 22.8962 198.966 20.5265 198.548 18.1408C198.176 15.9793 197.788 13.8017 197.416 11.6402C197.106 9.83094 196.781 8.00565 196.471 6.19637C196.238 4.88345 196.006 3.55451 195.773 2.24158C195.649 1.5531 195.541 0.880622 195.417 0.192136C195.401 0.12809 195.401 0.0640452 195.386 0H190.272C188.846 0 187.575 0.944667 187.094 2.33765L168.311 57.6567C167.567 60.1705 167.024 62.7803 165.924 63.677C164.823 64.5736 162.778 65.3742 160.67 65.4382L160.716 67.2795C166.993 67.2795 173.27 67.2795 179.547 67.2795C179.609 66.607 179.593 66.607 179.655 65.9345L174.107 65.086C173.502 64.9739 172.883 64.8458 172.387 64.4775C170.434 63.0525 170.992 59.6421 171.55 57.6567L171.782 56.8561C173.921 49.3628 180.895 45.8564 187.854 45.0878C188.582 45.0078 198.114 43.7269 198.145 43.919C198.47 46.1126 199.013 49.3308 199.353 51.5884C199.679 53.7179 199.849 56.2637 200.066 58.4413C200.206 59.9143 200.237 61.8357 199.741 63.2286C199.353 64.3334 198.656 64.9899 197.153 65.4222C195.851 65.8065 194.038 66.0306 192.705 66.0466C192.627 66.0466 192.674 67.2955 192.674 67.2955H212.016V66.0466C211.055 66.0146 210.094 65.7905 209.179 65.4542C208.528 65.198 207.707 64.9098 207.134 64.4295ZM185.715 42.3339C185.684 42.3339 185.653 42.3499 185.622 42.3499C183.623 42.7342 182.305 43.0384 180.368 43.6949C179.392 44.0311 177.811 44.8156 176.773 44.8797C176.556 44.8957 176.354 44.7996 176.153 44.7356C175.564 44.5434 175.781 43.7429 175.889 43.4066C176.742 40.9249 177.036 40.2364 177.532 38.6673C178.028 37.0822 178.663 35.6252 179.159 34.04C181.143 27.7636 183.096 21.4071 185.297 15.2107C185.994 13.2574 187.234 8.88627 188.691 7.31717C189.357 6.59666 190.256 6.21239 191.248 6.24441C191.821 6.26042 192.302 6.70874 192.395 7.30115C193.34 12.9211 194.75 18.5091 195.401 24.1771C195.866 28.2279 196.517 32.2628 197.06 36.3136C197.23 37.6106 197.261 37.5785 197.726 40.9409C192.984 41.117 187.156 42.0457 185.715 42.3339Z"
                fill="#174416"
              />
              <path
                d="M46.4636 64.5256C46.3551 64.4295 46.2622 64.3334 46.1692 64.2374C45.8592 63.8691 45.7197 63.4048 45.5957 62.9404C45.1928 61.3233 44.8208 59.2738 44.5884 57.6407C43.364 49.3148 41.8762 41.021 40.4193 32.7271C39.9854 30.2774 39.5669 27.8276 39.133 25.3779C38.7145 22.9922 38.2961 20.6226 37.8776 18.2369C37.5057 16.0753 37.1182 13.8978 36.7463 11.7363C36.4363 9.92701 36.1108 8.10172 35.8009 6.29244C35.5684 4.97952 35.3359 3.65058 35.1034 2.33765C34.9795 1.64917 34.871 0.976691 34.747 0.288205C34.7315 0.22416 34.7315 0.160115 34.716 0.0960693H29.6016C28.1757 0.0960693 26.9049 1.04074 26.4244 2.43372L7.64062 57.7528C6.8967 60.2665 6.35427 62.8764 5.25389 63.773C4.15352 64.6697 2.10776 65.4702 0 65.5343L0.0464946 67.3756C6.32327 67.3756 12.6 67.3756 18.8768 67.3756C18.9388 66.7031 18.9233 66.7031 18.9853 66.0306L13.4369 65.182C12.8325 65.0699 12.2126 64.9418 11.7166 64.5736C9.76387 63.1486 10.3218 59.7382 10.8797 57.7528L11.1122 56.9522C13.251 49.4589 20.2252 45.9524 27.1839 45.1839C27.9123 45.1038 37.4437 43.8229 37.4747 44.0151C37.8001 46.2086 38.3426 49.4269 38.6835 51.6845C39.009 53.814 39.1795 56.3598 39.3965 58.5373C39.5359 60.0104 39.5669 61.9317 39.071 63.3247C38.6835 64.4295 37.9861 65.0859 36.4828 65.5182C35.1809 65.9025 33.3676 66.1267 32.0348 66.1427C31.9573 66.1427 32.0038 67.3916 32.0038 67.3916H51.3456V66.1267C50.3847 66.0947 49.4238 65.8705 48.5094 65.5343C47.8585 65.2941 47.0371 65.0059 46.4636 64.5256ZM25.0606 42.43C25.0296 42.43 24.9986 42.446 24.9676 42.446C22.9683 42.8302 21.651 43.1345 19.7137 43.7909C18.7373 44.1272 17.1565 44.9117 16.1181 44.9758C15.9012 44.9918 15.6997 44.8957 15.4982 44.8317C14.9093 44.6395 15.1263 43.839 15.2347 43.5027C16.0871 41.021 16.3816 40.3325 16.8776 38.7634C17.3735 37.1782 18.0089 35.7212 18.5049 34.1361C20.4886 27.8597 22.4414 21.5032 24.6422 15.3068C25.3396 13.3534 26.5794 8.98234 28.0363 7.41324C28.7027 6.69273 29.6016 6.30846 30.5935 6.34048C31.1669 6.35649 31.6473 6.80481 31.7403 7.39722C32.6857 13.0172 34.0961 18.6051 34.747 24.2731C35.2119 28.324 35.8629 32.3588 36.4053 36.4097C36.5758 37.7066 36.6068 37.6746 37.0717 41.037C32.3138 41.2131 26.4864 42.1418 25.0606 42.43Z"
                fill="#174416"
              />
              <path
                d="M160.484 0.24016L144.769 0.336228C144.521 0.336228 144.319 0.560386 144.319 0.84859L144.288 2.06545C144.288 2.12949 144.614 2.06545 144.676 2.06545C147.279 2.08146 148.24 2.68989 149.62 4.00282C151.061 5.3958 150.937 8.85424 151.014 10.9197C151.216 16.1234 150.999 18.2689 150.999 23.4726C150.999 28.6282 150.999 33.7999 150.999 38.9555C150.999 41.069 150.999 43.1665 150.999 45.28C150.999 46.0965 151.014 47.2493 151.03 48.7544C151.061 50.2595 151.061 56.0075 151.061 56.8241C149.31 53.91 147.124 47.8578 146.443 46.5769C146.443 46.5769 127.705 5.07557 127.705 5.05956C126.636 2.68989 124.249 0.704488 121.955 0.256172C120.452 -0.0320317 118.716 0.192127 117.213 0.320217C116.252 0.400273 115.276 0.544375 114.33 0.752522C113.586 0.912635 113.075 1.0087 112.114 1.20084C111.897 1.24887 111.649 1.32893 111.432 1.44101C111.138 1.60112 110.89 1.8573 110.704 2.16152C110.518 2.48174 110.394 2.86601 110.378 3.25029C110.363 3.52248 110.378 3.77866 110.394 4.05085C110.487 3.9868 110.626 3.90675 110.642 3.90675C110.735 3.85871 110.828 3.82669 110.936 3.77866C111.138 3.68259 111.324 3.60253 111.525 3.52248C112.331 3.21826 113.199 3.18624 114.036 3.13821C114.051 3.13821 114.051 3.13821 114.067 3.13821C114.733 3.10618 115.431 3.15422 116.02 3.58652C116.841 4.21096 117.151 5.3958 117.321 6.50058C117.895 10.1832 117.6 13.9779 117.6 17.6925C117.6 20.3664 117.6 23.0403 117.6 25.7302C117.6 31.6063 117.6 37.4824 117.6 43.3586C117.6 46.6089 117.6 49.8592 117.6 53.1095C117.6 53.1415 117.6 53.1575 117.6 53.1895C117.6 57.0803 117.135 61.3233 116.051 62.9885C115.043 64.5255 113.307 65.6463 110.952 65.9185C110.936 65.9185 110.936 65.9185 110.921 65.9345C110.859 65.9505 110.797 65.9505 110.735 65.9666C110.626 65.9826 110.533 65.9826 110.425 65.9826C110.347 65.9826 110.332 65.9986 110.332 66.0626C110.332 66.3668 110.332 66.655 110.332 66.9593C110.332 67.0873 110.332 67.1994 110.332 67.3275C110.332 67.4236 110.316 67.4396 110.425 67.4396H110.44C113.075 67.4396 115.725 67.4396 118.36 67.4396C121.459 67.4396 124.559 67.4396 127.659 67.4396C127.736 67.4396 127.736 67.4396 127.736 67.3595C127.736 67.1194 127.736 66.8632 127.736 66.623C127.736 66.4469 127.736 66.2548 127.736 66.0786C127.736 66.0466 127.736 66.0146 127.705 66.0146C127.628 66.0146 127.55 65.9986 127.473 65.9986C127.395 65.9986 127.318 65.9986 127.225 65.9826C127.194 65.9826 127.163 65.9826 127.132 65.9826C127.101 65.9826 127.085 65.9666 127.054 65.9666C126.062 65.8865 125.194 65.7744 124.342 65.5343C124.249 65.5022 124.172 65.4862 124.079 65.4542C124.032 65.4382 124.001 65.4222 123.955 65.4062C123.8 65.3421 123.66 65.2621 123.505 65.166C123.49 65.166 123.474 65.15 123.474 65.15C123.335 65.0539 123.195 64.9418 123.056 64.8137C122.854 64.6376 122.699 64.4295 122.529 64.2213C122.436 64.1092 122.358 63.9812 122.281 63.8691C122.219 63.773 122.157 63.6769 122.095 63.5809C121.955 63.3407 121.831 63.1005 121.707 62.8444C120.901 61.0511 120.607 58.9856 120.545 57.0002C120.468 54.8227 120.483 52.6612 120.483 50.4836V15.611C120.483 15.611 120.375 7.07699 120.483 5.78007C120.592 4.48316 122.033 3.15422 123.211 4.6913C123.753 5.3958 126.031 10.3433 126.031 10.3753L129.983 19.0534L132.417 23.9049L133.099 25.3459L151.433 67.3435C151.619 67.7758 152.022 68.064 152.456 68.064H154.021V12.5849C154.021 9.91099 153.882 7.65339 154.936 5.20366C156.067 2.57781 158.237 2.09747 160.592 2.06545H160.856C160.887 1.31292 161.073 0.24016 160.484 0.24016Z"
                fill="#174416"
              />
              <path
                d="M104.721 0.25617L89.0218 0.368249C88.7738 0.368249 88.5723 0.592408 88.5723 0.880611L88.5413 2.09747C88.5413 2.16152 88.8668 2.09747 88.9288 2.09747C91.5325 2.11348 92.4934 2.72191 93.8727 4.03484C95.314 5.42782 95.1901 8.88626 95.2676 10.9517C95.469 16.1554 95.252 18.3009 95.252 23.5046C95.252 28.6602 95.252 33.8319 95.252 38.9875C95.252 41.101 95.252 43.1985 95.252 45.312C95.252 46.1286 95.2675 47.2814 95.283 48.7864C95.314 50.2915 95.314 56.0396 95.314 56.8561C93.5627 53.9421 91.3775 47.8898 90.6956 46.6089C90.6956 46.6089 71.9582 5.1076 71.9582 5.09158C70.8889 2.72191 68.5021 0.736509 66.2084 0.288193C64.7051 -1.05798e-05 62.9693 0.208136 61.466 0.352238C60.5051 0.432295 59.5287 0.576396 58.5833 0.784543C57.8394 0.944656 57.3279 1.04072 56.367 1.23286C56.1501 1.28089 55.8866 1.36095 55.6851 1.47303C55.3907 1.63314 55.1427 1.88932 54.9567 2.19354C54.7707 2.51376 54.6467 2.89804 54.6312 3.28231C54.6157 3.5545 54.6312 3.81068 54.6467 4.08287C54.7397 4.01883 54.8792 3.93877 54.8947 3.93877C54.9877 3.89074 55.0807 3.85871 55.1892 3.81068C55.3907 3.71461 55.5766 3.63456 55.7781 3.5545C56.584 3.25028 57.4519 3.21826 58.2888 3.17023C58.3043 3.17023 58.3043 3.17023 58.3198 3.17023C58.9862 3.13821 59.6837 3.18624 60.2726 3.61854C61.094 4.24298 61.404 5.42782 61.5744 6.5326C62.1479 10.2152 61.8534 14.0099 61.8534 17.7245C61.8534 20.3984 61.8534 23.0723 61.8534 25.7622C61.8534 31.6383 61.8534 37.5145 61.8534 43.3906C61.8534 46.6409 61.8534 49.8912 61.8534 53.1415C61.8534 53.1735 61.8534 53.1895 61.8534 53.2216C61.8534 57.1123 61.3885 61.3553 60.3036 63.0205C59.2962 64.5576 57.5604 65.6784 55.2047 65.9505C55.1892 65.9505 55.1892 65.9506 55.1737 65.9666C55.1117 65.9826 55.0497 65.9826 54.9877 65.9986C54.8792 66.0146 54.7862 66.0146 54.6777 66.0146C54.6002 66.0146 54.5848 66.0306 54.5848 66.0947C54.5848 66.3989 54.5848 66.6871 54.5848 66.9913C54.5848 67.1194 54.5848 67.2315 54.5848 67.3595C54.5848 67.4556 54.5692 67.4716 54.6777 67.4716H54.6932C57.3279 67.4716 59.9781 67.4716 62.6128 67.4716C65.7125 67.4716 68.8121 67.4716 71.9117 67.4716C71.9892 67.4716 71.9892 67.4716 71.9892 67.3916C71.9892 67.1514 71.9892 66.8952 71.9892 66.6551C71.9892 66.4789 71.9892 66.2868 71.9892 66.1107C71.9892 66.0786 71.9892 66.0466 71.9582 66.0466C71.8808 66.0466 71.8033 66.0306 71.7258 66.0306C71.6483 66.0306 71.5708 66.0306 71.4778 66.0146C71.4468 66.0146 71.4158 66.0146 71.3848 66.0146C71.3538 66.0146 71.3383 65.9986 71.3073 65.9986C70.3154 65.9185 69.4475 65.8064 68.5951 65.5663C68.5021 65.5343 68.4247 65.5182 68.3317 65.4862C68.2852 65.4702 68.2542 65.4542 68.2077 65.4382C68.0527 65.3741 67.9132 65.2941 67.7582 65.198C67.7427 65.198 67.7272 65.182 67.7272 65.182C67.5877 65.0859 67.4483 64.9739 67.3088 64.8458C67.1073 64.6696 66.9523 64.4615 66.7818 64.2534C66.6889 64.1413 66.6114 64.0132 66.5339 63.9011C66.4719 63.805 66.4099 63.709 66.3479 63.6129C66.2084 63.3727 66.0844 63.1326 65.9604 62.8764C65.1545 61.0831 64.8601 59.0177 64.7981 57.0323C64.7206 54.8547 64.7361 52.6932 64.7361 50.5157V15.643C64.7361 15.643 64.6276 7.10901 64.7361 5.81209C64.8446 4.51518 66.2859 3.18624 67.4638 4.72332C68.0062 5.42782 70.2844 10.3753 70.2844 10.4073L74.2365 19.0855L76.6697 23.9369L77.3516 25.3779L95.686 67.3756C95.872 67.8079 96.2749 68.0961 96.7089 68.0961H98.2742V12.6169C98.2742 9.94301 98.1347 7.68541 99.1886 5.23569C100.32 2.60983 102.49 2.12949 104.845 2.09747H105.109C105.14 1.32893 105.326 0.272182 104.721 0.25617Z"
                fill="#174416"
              />
            </g>
            <defs>
              <clipPath id="clip0_63_5">
                <rect width="212" height="68" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <img src="src/assets/jilkova.png" alt="jilkova" />
          <svg
            className="svg-pink-home"
            xmlns="http://www.w3.org/2000/svg"
            width="211"
            height="217"
            viewBox="0 0 211 217"
            fill="none"
          >
            <path
              d="M-264.153 65.1218C-235.832 57.7347 -212.457 44.5784 -187.151 66.3302C-169.197 81.7624 -160.195 103.636 -133.974 107.934C-96.6514 114.052 -52.8161 78.5407 -37.9792 47.1683C-22.6295 14.7116 11.3023 -7.99496 48.3468 6.42763C69.044 14.4857 77.2791 40.2025 97.5526 48.5494C108.7 53.1389 122.66 44.8532 132.774 41.2126C145.718 36.5532 159.776 34.0799 173.519 36.2926C194.42 39.6576 207.39 56.5923 209.431 77.2059C210.741 90.4304 209.8 104.839 206.496 117.688C203.241 130.343 195.562 136.183 187.245 145.222C183.222 149.595 178.375 156.061 177.491 162.14C176.462 169.211 182.681 174.541 184.742 180.87C191.614 201.976 153.985 208.19 140.888 209.095C114.97 210.888 88.101 206.643 72.0865 184.323C59.795 167.191 62.2329 140.658 42.9946 128.65C29.4864 120.218 9.25521 117.056 -5.08898 125.024C-23.8955 135.471 -29.115 159.128 -42.9861 173.965C-67.2374 199.905 -103.235 222.937 -140.793 212.375C-151.312 209.417 -159.82 200.168 -167.468 192.868C-177.889 182.923 -189.671 174.074 -202.171 166.887C-216.41 158.701 -236.086 154.989 -251.636 161.536C-259.051 164.658 -264.698 171.037 -272.786 172.325C-283.872 174.091 -293.349 173.178 -303 167.664"
              stroke="#F4C7ED"
              strokeOpacity="0.51"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="svg-arrow-home"
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="150"
            viewBox="0 0 94 150"
            fill="none"
          >
            <path
              d="M60.9063 1.70026C63.5662 3.21989 64.6996 12.2046 64.8437 14.8767C65.2831 23.0298 64.8293 32.0879 61.5563 39.5294C57.9492 47.7304 54.9227 56.8649 43.9566 56.9788C36.5005 57.0562 32.9053 55.3233 36.3338 47.0863C39.6512 39.1161 45.8516 43.0372 52.138 45.8022C65.247 51.5679 68.1394 59.2159 67.3075 72.4569C66.8457 79.8068 62.7386 86.6298 59.8429 93.2135C56.4582 100.909 53.0736 108.604 49.6889 116.299C45.3595 126.143 41.0302 135.986 36.7008 145.829"
              stroke="#F4C7ED"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M32 141C33.2787 141.154 36.8125 146.847 36.8125 147.938C36.8125 150.139 37.987 148.331 39.4375 147.728C40.8425 147.144 42.4013 147.636 43.7153 146.887C44.4792 146.452 45.2915 145.966 46 145.626"
              stroke="#F4C7ED"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </main>
    </>
  );
};
