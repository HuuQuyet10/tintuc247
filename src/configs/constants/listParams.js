export default {
    listParamsMenu: [
      

      // start menu
      {
        id: 999999999,
        name: "Video",
        is_hot: true,
        url: 'video',
        urlPage: "/video",
        sub_type: []
      },
      // {
      //   id: 111111,
      //   name: "Covid-19",
      //   is_hot: true,
      //   url: 'covid-19',
      //   urlPage: "/danh-muc/covid-19",
      //   sub_type: []
      // },
      // {
      //   id: "444444",
      //   name: "SEA Games",
      //   is_hot: true,
      //   url: "sea-game",
      //   urlPage: "/danh-muc/sea-game",
      //   sub_type: []
      // },
      {
        id: 1,
        name: "Thời sự",
        is_hot: true,
        url: 'thoi-su',
        urlPage: "/danh-muc/thoi-su",
        sub_type: [
          {
            id: 1,
            name: "Chính trị",
            url: "chinh-tri",
            urlPage: "/danh-muc/thoi-su/chinh-tri",
            ofCate: "Thời sự"
          },
          {
            id: 2,
            name: "Xã hội",
            url: "xa-hoi",
            urlPage: "/danh-muc/thoi-su/xa-hoi",
            ofCate: "Thời sự"
          },
          {
            id: 3,
            name: "Quốc phòng",
            url: "quoc-phong",
            urlPage: "/danh-muc/thoi-su/quoc-phong",
            ofCate: "Thời sự"
          },
          {
            id: 41,
            name: "Giao thông",
            url: "giao-thong",
            urlPage: "/danh-muc/thoi-su/giao-thong",
            ofCate: "Thời sự"
          },
          {
            id: 81,
            name: "Đời sống",
            url: "doi-song",
            urlPage: "/danh-muc/thoi-su/doi-song",
            ofCate: "Thời sự"
          },
        ]
      },
      {
        id: 305,
        name: "Thế giới",
        is_hot: true,
        url: 'the-gioi',
        urlPage: "/danh-muc/the-gioi",
        sub_type: [
          {
            id: 5,
            name: "Quân sự",
            url: "quan-su",
            urlPage: "/danh-muc/the-gioi/quan-su",
            ofCate: "Thế giới"
          },
          {
            id: 6,
            name: "Người Việt ở nước ngoài",
            url: "nuoc-ngoai",
            urlPage: "/danh-muc/the-gioi/nuoc-ngoai",
            ofCate: "Thế giới"
          },
          {
            id: 7,
            name: "Chính trị xã hội",
            url: "chinh-tri-xa-hoi",
            urlPage: "/danh-muc/the-gioi/chinh-tri-xa-hoi",
            ofCate: "Thế giới"
          },
          {
            id: 8,
            name: "Phân tích/Bình luận",
            url: "binh-luan",
            urlPage: "/danh-muc/the-gioi/binh-luan",
            ofCate: "Thế giới"
          },
          {
            id: 78,
            name: "Thế giới đó đây",
            url: "the-gioi-do-day",
            urlPage: "/danh-muc/the-gioi/the-goi-do-day",
            ofCate: "Thế giới"
          }
        ]
      },
      {
        id: 3,
        name: "Thể thao",
        is_hot: true,
        url: 'the-thao',
        urlPage: "/danh-muc/the-thao",
        sub_type: [
          {
            id: 9,
            name: "Bóng đá Việt Nam",
            url: "bong-da-viet-nam",
            urlPage: "/danh-muc/the-thao/bong-da-viet-nam",
            ofCate: "Thể thao"
          },
          {
            id: 10,
            name: "Bóng đá Anh",
            url: "bong-da-anh",
            urlPage: "/danh-muc/the-thao/bong-da-anh",
            ofCate: "Thể thao"
          },
          {
            id: 11,
            name: "Bóng đá Tây Ban Nha",
            url: "bong-da-tay-ban-nha",
            urlPage: "/danh-muc/the-thao/bong-da-tay-ban-nha",
            ofCate: "Thể thao"
          },
          {
            id: 12,
            name: "Bóng đá Ý",
            url: "bong-da-y",
            urlPage: "/danh-muc/the-thao/bong-da-y",
            ofCate: "Thể thao"
          },
          {
            id: 13,
            name: "Bóng đá Đức",
            url: "bong-da-duc",
            urlPage: "/danh-muc/the-thao/bong-da-duc",
            ofCate: "Thể thao"
          },
          {
            id: 14,
            name: "Bóng đá Pháp",
            url: "bong-da-phap",
            urlPage: "/danh-muc/the-thao/bong-da-phap",
            ofCate: "Thể thao"
          },
          {
            id: 15,
            name: "Cúp C1",
            url: "cup-c1",
            urlPage: "/danh-muc/the-thao/cup-c1",
            ofCate: "Thể thao"
          },
          {
            id: 16,
            name: "Hậu Trường",
            url: "hau-truong",
            urlPage: "/danh-muc/the-thao/hau-truong",
            ofCate: "Thể thao"
          },
          {
            id: 17,
            name: "Các môn thể thao khác",
            url: "the-thao-khac",
            urlPage: "/danh-muc/the-thao/the-thao-khac",
            ofCate: "Thể thao"
          },
          {
            id: 18,
            name: "Chuyển nhượng",
            url: "chuyen-nhuong",
            urlPage: "/danh-muc/the-thao/chuyen-nhuong",
            ofCate: "Thể thao"
          },
          {
            id: 78,
            name: "World Cup 2022",
            url: "world-cup",
            urlPage: "/danh-muc/the-thao/world-cup",
            ofCate: "Thể thao"
          }
        ]
      },
      {
        id: 5,
        name: "Pháp luật",
        is_hot: false,
        url: 'phap-luat',
        urlPage: "/danh-muc/phap-luat",
        sub_type: [
          {
            id: 19,
            name: "Tin nóng",
            url: "tin-nong",
            urlPage: "/danh-muc/phap-luat/tin-nong",
            ofCate: "Pháp luật"
          },
          {
            id: 20,
            name: "Pháp đình",
            url: "phap-dinh",
            urlPage: "/danh-muc/phap-luat/phap-dinh",
            ofCate: "Pháp luật"
          },
          {
            id: 21,
            name: "Hồ sơ vụ án",
            url: "ho-so-vu-an",
            urlPage: "/danh-muc/phap-luat/ho-so-vu-an",
            ofCate: "Pháp luật"
          },
          {
            id: 22,
            name: "Kỳ án",
            url: "ky-an",
            urlPage: "/danh-muc/phap-luat/ky-an",
            ofCate: "Pháp luật"
          }
        ]
      },
      {
        id: 4,
        name: "Kinh tế",
        is_hot: false,
        url: 'kinh-te',
        urlPage: "/danh-muc/kinh-te",
        sub_type: [
          {
            id: 30,
            name: "Tài chính",
            url: "tai-chinh",
            urlPage: "/danh-muc/kinh-te/tai-chinh",
            ofCate: "Kinh tế"
          },
          {
            id: 31,
            name: "Chứng khoán",
            url: "chung-khoan",
            urlPage: "/danh-muc/kinh-te/chung-khoan",
            ofCate: "Kinh tế"
          },
          {
            id: 32,
            name: "Doanh nghiệp",
            url: "doanh-nghiep",
            urlPage: "/danh-muc/kinh-te/doanh-nghiep",
            ofCate: "Kinh tế"
          },
          {
            id: 33,
            name: "Tiêu dùng",
            url: "tieu-dung",
            urlPage: "/danh-muc/kinh-te/tieu-dung",
            ofCate: "Kinh tế"
          },
          {
            id: 34,
            name: "Bất động sản",
            url: "bat-dong-san",
            urlPage: "/danh-muc/kinh-te/bat-dong-san",
            ofCate: "Kinh tế"
          },
          {
            id: 35,
            name: "Kinh tế",
            url: "kinh-te",
            urlPage: "/danh-muc/kinh-te/kinh-te",
            ofCate: "Kinh tế"
          }
        ]
      },
      {
        id: 2,
        name: "Giải trí",
        is_hot: false,
        url: 'giai-tri',
        urlPage: "/danh-muc/giai-tri",
        sub_type: [
          {
            id: 76,
            name: "Tin tức",
            url: "tin-tuc",
            urlPage: "/danh-muc/giai-tri/tin-tuc",
            ofCate: "Giải trí"
          },
          {
            id: 42,
            name: "VBiz",
            url: "vbiz",
            urlPage: "/danh-muc/giai-tri/vbiz",
            ofCate: "Giải trí"
          },
          {
            id: 43,
            name: "Sao quốc tế",
            url: "sao-quoc-te",
            urlPage: "/danh-muc/giai-tri/sao-quoc-te",
            ofCate: "Giải trí"
          },
          {
            id: 44,
            name: "Tivi Show",
            url: "tivi-show",
            urlPage: "/danh-muc/giai-tri/tivi-show",
            ofCate: "Giải trí"
          },
          {
            id: 61,
            name: "Phim Việt",
            url: "phim-viet",
            urlPage: "/danh-muc/giai-tri/phim-viet",
            ofCate: "Giải trí"
          },
          {
            id: 62,
            name: "Phim Châu Á",
            url: "phim-chau-a",
            urlPage: "/danh-muc/giai-tri/phim-chau-a",
            ofCate: "Giải trí"
          },
          {
            id: 63,
            name: "Phim Âu Mỹ",
            url: "phim-au-my",
            urlPage: "/danh-muc/giai-tri/phim-au-my",
            ofCate: "Giải trí"
          },
          {
            id: 64,
            name: "Hậu trường phim",
            url: "hau-truong-phim",
            urlPage: "/danh-muc/giai-tri/hau-truong-phim",
            ofCate: "Giải trí"
          }
        ]
      },
      {
        id: 10,
        name: "Sức khỏe",
        is_hot: false,
        url: 'suc-khoe',
        urlPage: "/danh-muc/suc-khoe",
        sub_type: [
          {
            id: 25,
            name: "Làm đẹp",
            url: "lam-dep",
            urlPage: "/danh-muc/suc-khoe/lam-dep",
            ofCate: "Sức khỏe"
          },
          {
            id: 26,
            name: "Tin tức sức khỏe",
            url: "sk",
            urlPage: "/danh-muc/suc-khoe/tin-tuc-suc-khoe",
            ofCate: "Sức khỏe"
          },
          {
            id: 29,
            name: "Tư vấn sức khỏe",
            url: "tu-van",
            urlPage: "/danh-muc/suc-khoe/tu-van",
            ofCate: "Sức khỏe"
          },
          {
            id: 46,
            name: "Tin y tế",
            url: "tin-y-te",
            urlPage: "/danh-muc/suc-khoe/tin-y-te",
            ofCate: "Sức khoẻ"
          },
          {
            id: 70,
            name: "Sức khoẻ giới tính",
            url: "suc-khoe-gioi-tinh",
            urlPage: "/danh-muc/suc-khoe/suc-khoe-gioi-tinh",
            ofCate: "Sức khoẻ"
          }
        ]
      },
      {
        id: 8,
        name: "Giáo dục",
        is_hot: false,
        url: 'giao-duc',
        urlPage: "/danh-muc/giao-duc",
        sub_type: [
          {
            id: 36,
            name: "Tin tức",
            url: "tin-tuc",
            urlPage: "/danh-muc/giao-duc/tin-tuc",
            ofCate: "Giáo dục"
          },
          {
            id: 37,
            name: "Tuyển sinh",
            url: "tuyen-sinh",
            urlPage: "/danh-muc/giao-duc/tuyen-sinh",
            ofCate: "Giáo dục"
          },
          {
            id: 38,
            name: "Du học",
            url: "du-hoc",
            urlPage: "/danh-muc/giao-duc/du-hoc",
            ofCate: "Giáo dục"
          },
          {
            id: 40,
            name: "Giáo dục-nghề nghiệp",
            url: "giao-duc",
            urlPage: "/danh-muc/giao-duc/giao-duc",
            ofCate: "Giáo dục"
          }
        ]
      },
      {
        id: 6,
        name: "Công nghệ",
        is_hot: false,
        url: 'cong-nghe',
        urlPage: "/danh-muc/cong-nghe",
        sub_type: [
          {
            id: 49,
            name: "Thế giới số",
            url: "the-gioi-so",
            urlPage: "/danh-muc/cong-nghe/the-gioi-so",
            ofCate: "Công nghệ"
          },
          {
            id: 48,
            name: "Đồ 2tek",
            url: "do-2tek",
            urlPage: "/danh-muc/cong-nghe/do-2tek",
            ofCate: "Công nghệ"
          }
        ]
      },
      {
        id: 9,
        name: "Tâm sự",
        is_hot: false,
        url: 'tam-su',
        urlPage: '/danh-muc/tam-su',
        sub_type: [
          {
            id: 71,
            name: "Tình yêu",
            url: "tinh-yeu",
            urlPage: "/danh-muc/tam-su/tinh-yeu",
            ofCate: "Tâm sự"
          },
          {
            id: 50,
            name: "Tâm sự chia sẻ",
            url: "tam-su-chia-se",
            urlPage: "/danh-muc/tam-su/tam-su-chia-se",
            ofCate: "Tâm sự"
          }
        ]
      },
      
      {
        id: 14,
        name: "Cẩm nang",
        is_hot: false,
        url: 'cam-nang',
        urlPage: "/danh-muc/cam-nang",
        sub_type: [
          {
            id: 45,
            name: "Beauty&Fashion",
            url: "beauty-fashion",
            urlPage: "/danh-muc/cam-nang/beauty-fashion",
            ofCate: "Cẩm nang"
          },
          {
            id: 54,
            name: "Ăn ngon",
            url: "an-ngon",
            urlPage: "/danh-muc/cam-nang/an-ngon",
            ofCate: "Cẩm nang"
          },
          {
            id: 56,
            name: "Vào bếp",
            url: "vao-bep",
            urlPage: "/danh-muc/cam-nang/vao-bep",
            ofCate: "Cẩm nang"
          },
        ]
      },
      {
        id: 13,
        name: "Khám phá",
        is_hot: false,
        url: 'kham-pha',
        urlPage: "/danh-muc/kham-pha",
        sub_type: [
          {
            id: 53,
            name: "Du lịch",
            url: "du-lich",
            urlPage: "/danh-muc/kham-pha/du-lich",
            ofCate: "Khám phá"
          },
          {
            id: 52,
            name: "Tử vi",
            url: "tu-vi",
            urlPage: "/danh-muc/kham-pha/tu-vi",
            ofCate: "Khám phá"
          },
          {
            id: 72,
            name: "Chuyện lạ",
            url: "chuyen-la",
            urlPage: "/danh-muc/kham-pha/chuyen-la",
            ofCate: "Khám phá"
          }
        ]
      },
      {
        id: 225,
        name: "Tin game",
        is_hot: false,
        url: 'tin-game',
        urlPage: "/danh-muc/tin-game",
        sub_type: [
          {
            id: 57,
            name: "Tin tức",
            url: "tin-tuc",
            urlPage: "/danh-muc/tin-game/tin-tuc",
            ofCate: "Tin game"
          },
          {
            id: 59,
            name: "Esport",
            url: "esport",
            urlPage: "/danh-muc/tin-game/esport",
            ofCate: "Tin game"
          },
          {
            id: 58,
            name: "Game online",
            url: "game-online",
            urlPage: "/danh-muc/tin-game/game-online",
            ofCate: "Tin game"
          }
        ]
      },
      {
        id: 243,
        name: "Manga/Film",
        is_hot: false,
        url: 'manga-film',
        urlPage: "/danh-muc/manga-film",
        sub_type: []
      },
      {
        id: 15,
        name: "Xe cộ",
        is_hot: false,
        url: 'xe-co',
        urlPage: "/danh-muc/xe-co",
        sub_type: [
          {
            id: 66,
            name: "Ô tô",
            url: "o-to",
            urlPage: "/danh-muc/xe-co/o-to",
            ofCate: "Xe cộ"
          },
          {
            id: 67,
            name: "Xe máy",
            url: "xe-may",
            urlPage: "/danh-muc/xe-co/xe-may",
            ofCate: "Xe cộ"
          }
        ]
      },
      {
        id: 16,
        name: "Cộng đồng",
        is_hot: false,
        url: 'cong-dong',
        urlPage: "/danh-muc/cong-dong",
        sub_type: [
          {
            id: 69,
            name: "Cộng đồng mạng",
            url: "cong-dong-mang",
            urlPage: "/danh-muc/cong-dong/cong-dong-mang",
            ofCate: "Cộng đồng"
          },
          {
            id: 75,
            name: "Bạn đọc",
            url: "ban-doc",
            urlPage: "/danh-muc/cong-dong/ban-doc",
            ofCate: "Cộng đồng"
          }
        ]
      }
    ],
  }