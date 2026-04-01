export type Locale = 'ko' | 'en';

const translations = {
  // Control Panel
  'category.leadgen': { ko: '리드젠 광고', en: 'Lead-Gen Ads' },
  'category.product': { ko: '프러덕트 카탈로그', en: 'Product Catalog' },
  'view.inapp': { ko: '인앱', en: 'InApp' },
  'view.bottomsheet': { ko: '바텀시트', en: 'Bottom Sheet' },

  // Action Buttons
  'action.inapp_browser': { ko: '인앱 브라우저', en: 'InApp Browser' },
  'action.bottom_sheet': { ko: '바텀 시트', en: 'Bottom Sheet' },
  'action.start_consulting': { ko: '상담 시작하기', en: 'Start Chat' },

  // Ad Content - Car
  'ad.car.video_alt': { ko: 'EV6 자동차 광고', en: 'EV6 Car Ad' },
  'ad.car.advertiser': { ko: '자동차 · KIA EV6 · 자세히 알아보기', en: 'Auto · KIA EV6 · Learn More' },
  'ad.car.banner_tag': { ko: 'Test Drive Event', en: 'Test Drive Event' },
  'ad.car.banner_title': { ko: 'KIA EV6 무료 시승 신청', en: 'KIA EV6 Free Test Drive' },
  'ad.car.banner_sub': { ko: '지금 신청하면 스타벅스 쿠폰 증정', en: 'Apply now and get a Starbucks coupon' },

  // Ad Content - Insurance
  'ad.insurance.video_alt': { ko: '보험 상담 광고', en: 'Insurance Consulting Ad' },
  'ad.insurance.advertiser': { ko: '보험 · 삼성생명 · 자세히 알아보기', en: 'Insurance · Samsung Life · Learn More' },
  'ad.insurance.banner_tag': { ko: 'Insurance Consulting', en: 'Insurance Consulting' },
  'ad.insurance.banner_title': { ko: '삼성생명 무료 보험 상담', en: 'Samsung Life Free Consultation' },
  'ad.insurance.banner_sub': { ko: '지금 상담 신청하면 기프티콘 증정', en: 'Apply now and get a gift card' },

  // In-Stream UI
  'ad.more_info': { ko: '광고 정보 더보기', en: 'More Info' },
  'ad.skip': { ko: '초 후 건너뛰기', en: 's to skip' },
  'ad.label': { ko: '광고', en: 'Ad' },

  // Out-Stream Tabs
  'tab.home': { ko: '홈', en: 'Home' },
  'tab.drama': { ko: '드라마', en: 'Drama' },
  'tab.entertainment': { ko: '예능', en: 'Variety' },
  'tab.movie': { ko: '영화', en: 'Movies' },
  'tab.sports': { ko: '스포츠', en: 'Sports' },
  'tab.anime': { ko: '애니', en: 'Anime' },
  'tab.news': { ko: '뉴스', en: 'News' },

  // Out-Stream Sections
  'section.popular_binge': { ko: '인기 정주행 채널', en: 'Popular Binge Channels' },
  'section.see_more': { ko: '더보기', en: 'See more' },

  // In-Stream Title
  'content.title': { ko: '뉴스퀘어 2PM', en: 'NewsSquare 2PM' },
  'content.time': { ko: '13:50 ~ 15:50', en: '13:50 ~ 15:50' },

  // 3 Buttons
  'btn.tving_talk': { ko: '티빙톡', en: 'Tving Talk' },
  'btn.next_show': { ko: '다음 방송', en: 'Up Next' },
  'btn.share': { ko: '공유', en: 'Share' },

  // Tabs
  'tab.all_channels': { ko: '전체 채널', en: 'All Channels' },
  'tab.recommended': { ko: '추천 콘텐츠', en: 'Recommended' },

  // Bottom Tab Bar
  'tab_bar.home': { ko: '홈', en: 'Home' },
  'tab_bar.shorts': { ko: '쇼츠', en: 'Shorts' },
  'tab_bar.live': { ko: '라이브', en: 'Live' },
  'tab_bar.search': { ko: '검색', en: 'Search' },
  'tab_bar.history': { ko: '기록', en: 'History' },

  // Product Catalog
  'product.olive_young': { ko: '올리브영', en: 'Olive Young' },
  'product.beauty_sale': { ko: '뷰티 꿀 세일 최대', en: 'Beauty Sale Up to' },
  'product.mediheal_in_oy': { ko: '메디힐 in 올리브영', en: 'Mediheal in Olive Young' },
  'product.derma_best': { ko: '더마 스킨케어 베스트', en: 'Derma Skincare Best' },
  'product.oy_exclusive': { ko: '올리브영 단독 기획전', en: 'Olive Young Exclusive' },
  'product.mediheal': { ko: '메디힐', en: 'Mediheal' },
  'product.promo_products': { ko: '기획전 상품', en: 'Promotion Products' },
  'product.beauty_honey_sale': { ko: '뷰티 꿀 세일', en: 'Beauty Honey Sale' },
  'product.up_to_50': { ko: '최대 50% 할인 · 올리브영 단독 기획전', en: 'Up to 50% off · Olive Young Exclusive' },
  'product.add_to_cart': { ko: '장바구니', en: 'Add to Cart' },
  'product.buy_now': { ko: '바로 구매', en: 'Buy Now' },

  // OliveYoungPromo
  'promo.skip_after': { ko: '초 후 건너뛰기', en: 's to skip' },

  // BottomSheet
  'bottomsheet.default_title': { ko: '광고 정보', en: 'Ad Info' },
  'bottomsheet.test_drive': { ko: '시승 신청', en: 'Test Drive' },
  'bottomsheet.insurance': { ko: '보험 상담 신청', en: 'Insurance Consultation' },

  // LeadGenForm - Car
  'form.car.title': { ko: 'The All-New EV6 무료 시승 신청', en: 'The All-New EV6 Free Test Drive' },
  'form.car.incentive': { ko: '지금 시승 신청하시면', en: 'Apply now and get a' },
  'form.car.incentive_item': { ko: '스타벅스 아메리카노 쿠폰', en: 'Starbucks Americano coupon' },
  'form.car.incentive_suffix': { ko: '을 드립니다.', en: '.' },
  'form.car.submit': { ko: '시승 신청하기', en: 'Apply for Test Drive' },
  'form.car.success_title': { ko: '시승 신청이 완료되었습니다', en: 'Test Drive Applied' },
  'form.car.success_desc': { ko: '담당 딜러가 영업일 기준 1~2일 내\n연락드릴 예정입니다.', en: 'A dealer will contact you\nwithin 1-2 business days.' },
  'form.car.terms': { ko: '개인정보 수집 및 이용에 동의합니다. 수집된 정보는 시승 상담 목적으로만 사용됩니다. (필수)', en: 'I agree to the collection and use of personal information. Collected data is used solely for test drive consultation. (Required)' },

  // LeadGenForm - Insurance
  'form.insurance.title': { ko: '삼성생명 무료 보험 상담', en: 'Samsung Life Free Consultation' },
  'form.insurance.incentive': { ko: '지금 상담 신청하시면', en: 'Apply now and get a' },
  'form.insurance.incentive_item': { ko: '배스킨라빈스 기프티콘', en: 'Baskin Robbins gift card' },
  'form.insurance.incentive_suffix': { ko: '을 드립니다.', en: '.' },
  'form.insurance.submit': { ko: '상담 신청하기', en: 'Apply for Consultation' },
  'form.insurance.success_title': { ko: '상담 신청이 완료되었습니다', en: 'Consultation Applied' },
  'form.insurance.success_desc': { ko: '전문 설계사가 영업일 기준 1일 내\n연락드릴 예정입니다.', en: 'A specialist will contact you\nwithin 1 business day.' },
  'form.insurance.terms': { ko: '개인정보 수집 및 이용에 동의합니다. 수집된 정보는 보험 상담 목적으로만 사용됩니다. (필수)', en: 'I agree to the collection and use of personal information. Collected data is used solely for insurance consultation. (Required)' },

  // Form fields
  'form.name': { ko: '이름', en: 'Name' },
  'form.phone': { ko: '연락처', en: 'Phone' },
  'form.car_model': { ko: '희망 차종', en: 'Car Model' },
  'form.car_model_placeholder': { ko: '차종을 선택해주세요', en: 'Select a model' },
  'form.test_drive_date': { ko: '희망 시승일', en: 'Preferred Date' },
  'form.insurance_type': { ko: '관심 보험', en: 'Insurance Type' },
  'form.insurance_placeholder': { ko: '보험 유형을 선택해주세요', en: 'Select insurance type' },
  'form.consulting_time': { ko: '희망 상담 시간', en: 'Preferred Time' },
  'form.name_placeholder': { ko: '성함을 입력해주세요', en: 'Enter your name' },
  'form.close': { ko: '닫기', en: 'Close' },
  'form.agree_privacy': { ko: '개인정보 수집 및 이용 동의', en: 'Agree to Privacy Policy' },
  'form.privacy_car': { ko: '수집된 정보는 시승 상담 목적으로만 사용됩니다.', en: 'Collected data is used solely for test drive consultation.' },
  'form.privacy_insurance': { ko: '수집된 정보는 보험 상담 목적으로만 사용됩니다.', en: 'Collected data is used solely for insurance consultation.' },

  // Insurance options
  'insurance.comprehensive': { ko: '종합보험', en: 'Comprehensive' },
  'insurance.health': { ko: '건강보험', en: 'Health' },
  'insurance.auto': { ko: '자동차보험', en: 'Auto' },
  'insurance.pension': { ko: '연금보험', en: 'Pension' },
  'insurance.savings': { ko: '저축보험', en: 'Savings' },

  // Time options
  'time.morning': { ko: '오전 (10시~12시)', en: 'Morning (10-12)' },
  'time.afternoon1': { ko: '오후 (13시~15시)', en: 'Afternoon (13-15)' },
  'time.afternoon2': { ko: '오후 (15시~17시)', en: 'Afternoon (15-17)' },
  'time.evening': { ko: '저녁 (18시~20시)', en: 'Evening (18-20)' },

  // NativeLeadGenForm
  'native.car.incentive': { ko: 'EV6 시승 신청 시', en: 'Apply for EV6 test drive and get a' },
  'native.car.incentive_item': { ko: '스타벅스 쿠폰', en: 'Starbucks coupon' },
  'native.car.incentive_suffix': { ko: ' 증정', en: '' },
  'native.insurance.incentive': { ko: '무료 보험 상담 신청 시', en: 'Apply for free consultation and get a' },
  'native.insurance.incentive_item': { ko: '배스킨라빈스 기프티콘', en: 'Baskin Robbins gift card' },
  'native.insurance.incentive_suffix': { ko: ' 증정', en: '' },
  'native.success_title_car': { ko: '신청 완료', en: 'Application Complete' },
  'native.success_title_insurance': { ko: '상담 신청 완료', en: 'Consultation Applied' },
  'native.success_desc_car': { ko: '담당 딜러가 곧 연락드리겠습니다.', en: 'A dealer will contact you soon.' },
  'native.success_desc_insurance': { ko: '전문 설계사가 곧 연락드리겠습니다.', en: 'A specialist will contact you soon.' },
  'native.confirm': { ko: '확인', en: 'OK' },
  'native.select': { ko: '선택해주세요', en: 'Select' },
  'native.car_label': { ko: '차종', en: 'Model' },
  'native.date_label': { ko: '시승일', en: 'Date' },
  'native.insurance_label': { ko: '보험', en: 'Insurance' },
  'native.consulting_label': { ko: '상담', en: 'Time' },

  // Web Bridge
  'bridge.moving_to_kakao': { ko: '카카오톡으로 이동중입니다...', en: 'Redirecting to LINE...' },
  'bridge.please_wait': { ko: '잠시만 기다려주세요', en: 'Please wait' },

  // Messaging App (KakaoTalk for KR, LINE for EN)
  'kakao.name': { ko: '카카오톡', en: 'LINE' },
  'kakao.channel_move': { ko: '광고 클릭 시 카카오톡 채널로 이동합니다', en: 'Click the ad to open LINE Official Account' },
  'kakao.alert': { ko: '카카오톡 채널로 연결됩니다.', en: 'Connecting to LINE Official Account.' },

  // Binge content
  'binge.ep': { ko: '화', en: 'EP' },

  // Out-stream ranking
  'ranking.sub_newsquare': { ko: '뉴스퀘어 2PM', en: 'NewsSquare 2PM' },
  'ranking.sub_mudo': { ko: '[335회] 무한도전 우리!...', en: '[EP335] Infinite Challenge...' },
  'ranking.sub_yonhap': { ko: '뉴스 현장', en: 'News Scene' },

  // Channel list
  'channel.mudo': { ko: '[335회] 무한도전 우리! 어디 가? 두 번째 이야기', en: '[EP335] Infinite Challenge Where Are We Going? Part 2' },
  'channel.yonhap': { ko: '뉴스 현장', en: 'News Scene' },
  'channel.conan': { ko: '명탐정 코난 11기 (자막) 30화', en: 'Detective Conan Season 11 EP30' },

  // Binge channels
  'binge.samsiseki5': { ko: '삼시세끼 어촌편5', en: 'Three Meals a Day: Fishing Village 5' },
  'binge.hospital2': { ko: '슬기로운 의사생활 시즌2', en: 'Hospital Playlist S2' },
  'binge.samsiseki_gochang': { ko: '삼시세끼 고창편', en: 'Three Meals a Day: Gochang' },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}
