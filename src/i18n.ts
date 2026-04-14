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
  'native.mock_name': { ko: '하경제', en: 'Kevin Park' },
  'native.car_label': { ko: '차종', en: 'Model' },
  'native.date_label': { ko: '시승일', en: 'Date' },
  'native.insurance_label': { ko: '보험', en: 'Insurance' },
  'native.consulting_label': { ko: '상담', en: 'Time' },

  // Web Bridge — real product names when demo-safe labels is off
  'bridge.moving_to_kakao': { ko: '카카오톡으로 이동중입니다...', en: 'Redirecting to LINE...' },
  'bridge.please_wait': { ko: '잠시만 기다려주세요', en: 'Please wait' },

  'kakao.name': { ko: '카카오톡', en: 'LINE' },
  'kakao.channel_move': { ko: '광고 클릭 시 카카오톡 채널로 이동합니다', en: 'Click the ad to open LINE Official Account' },
  'kakao.alert': { ko: '카카오톡 채널로 연결됩니다.', en: 'Connecting to LINE Official Account.' },

  // In-flow copy (KakaoTalk / LINE)
  'messaging.marketing_optin': {
    ko: '광고와 마케팅 메시지를\n카카오톡으로 받아볼 수 있습니다.',
    en: 'You can receive ads and marketing\nmessages via KakaoTalk.',
  },
  'messaging.official_badge': { ko: '· 공식 카카오톡', en: '· Official LINE' },
  'messaging.add_friend_ads': {
    ko: '이 계정으로 광고·프로모션 메시지를\n카카오톡으로 받아보게 됩니다.',
    en: "You'll receive ads and promotional\nmessages from this account via LINE.",
  },
  'messaging.chat_thanks_friend': {
    ko: "'{name}' 채널을 카카오톡 친구로 추가해 주셔서 감사합니다.",
    en: "Thank you for adding '{name}' as a friend on LINE!",
  },
  'messaging.chat_inbox_line': {
    ko: '카카오톡에서 보험 안내와 프로모션을 받아보실 수 있습니다.',
    en: "You'll receive exclusive insurance plans, financial tips, and special promotions directly in your LINE inbox.",
  },
  'messaging.welcome_official_account': {
    ko: '{brand} 공식 카카오톡 계정입니다. 보험 안내와 프로모션 소식을 받아보세요.',
    en: "Welcome to {brand}'s official LINE account! Stay updated with the latest insurance plans, financial tips, and exclusive promotions. Chat with us anytime for personalized consultations.",
  },
  'messaging.chat_consult_offer': {
    ko: '언제든지 상담을 요청하실 수 있습니다.',
    en: 'Chat with us anytime for personalized consultations.',
  },
  'messaging.chat_welcome_brand': {
    ko: '{brand}와 함께해 주셔서 감사합니다.',
    en: 'Thanks for connecting with {brand}.',
  },
  /** Idle icon when demo-safe labels on */
  'messaging.idle_icon_mark': { ko: 'Chat', en: 'Chat' },

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

  // Generic / marketing-safe mode (checkbox)
  'settings.generic_brands': { ko: '데모용 표기', en: 'Demo-safe labels' },
  'settings.generic_brands_aria': {
    ko: '실제 기업·방송사명 대신 중립적인 표기와 이미지를 사용합니다',
    en: 'Uses neutral labels and imagery instead of real company or broadcaster names',
  },
  'generic.btn_talk': { ko: '톡', en: 'Talk' },
  'generic.brand_name': { ko: '큐어스킨', en: 'Cureskin' },
  'generic.item_name_prefix': { ko: '상품', en: 'Product' },
  'generic.product_desc': {
    ko: '데일리 케어용 스킨케어 제품 설명입니다.',
    en: 'Daily care skincare product description.',
  },
  'generic.retailer_name': { ko: '뷰티마켓', en: 'Beauty Market' },
  'generic.retailer_badge': { ko: '뷰', en: 'B' },
  'generic.promo_headline': { ko: '뷰티 특가', en: 'Beauty deals' },
  'generic.promo_sale_with_pct': { ko: '뷰티 기획전 최대 50%', en: 'Beauty promo up to 50%' },
  'generic.promo_hero_line': { ko: '뷰티 기획전 최대', en: 'Beauty promo up to' },
  'generic.up_to_line': { ko: '최대 50% · 뷰티마켓 기획전', en: 'Up to 50% off · Beauty Market promo' },
  'generic.mediheal_in_store': { ko: '더모 브랜드 in 뷰티마켓', en: 'Derma brand in Beauty Market' },
  'generic.derma_sub': { ko: '스킨케어 베스트', en: 'Skincare best' },
  'generic.promo_banner_sub': { ko: '뷰티마켓 단독', en: 'Beauty Market exclusive' },
  'generic.financial_short': { ko: '페어금융', en: 'Fair Financial' },
  'generic.financial_full': { ko: '페어금융 손해보험', en: 'Fair Financial Insurance' },
  'generic.financial_tagline': { ko: '당신의 금융 파트너', en: 'Your financial partner' },
  'generic.financial_url': { ko: 'preview.example.com', en: 'preview.example.com' },
  'generic.channel_logo_1': { ko: '뉴스A', en: 'N-A' },
  'generic.channel_logo_2': { ko: '예능A', en: 'V-A' },
  'generic.channel_logo_3': { ko: '뉴스B', en: 'N-B' },
  'generic.channel_logo_4': { ko: '애니A', en: 'A-A' },
  'generic.content_program': { ko: '국내 뉴스', en: 'Domestic news' },
  'generic.channel_title_1': { ko: '뉴스 라이브 A', en: 'News Live A' },
  'generic.channel_title_2': { ko: '예능 프로그램 B', en: 'Variety Show B' },
  'generic.channel_title_3': { ko: '뉴스 필드 C', en: 'News Field C' },
  'generic.channel_title_4': { ko: '애니메이션 D', en: 'Animation D' },
  'generic.ranking_sub_1': { ko: '오후 뉴스 블록', en: 'Afternoon news block' },
  'generic.ranking_sub_2': { ko: '버라이어티 특집', en: 'Variety special' },
  'generic.ranking_sub_3': { ko: '현장 리포트', en: 'Field report' },
  'generic.binge_1': { ko: '리얼리티 시리즈 A', en: 'Reality Series A' },
  'generic.binge_2': { ko: '드라마 시리즈 B', en: 'Drama Series B' },
  'generic.binge_3': { ko: '리얼리티 시리즈 C', en: 'Reality Series C' },
  'generic.ad.car.advertiser': { ko: '자동차 · EV 시승 · 자세히 알아보기', en: 'Auto · EV test drive · Learn more' },
  'generic.ad.car.banner_title': { ko: 'EV 무료 시승 신청', en: 'EV test drive signup' },
  'generic.ad.car.banner_sub': { ko: '신청 시 기프트 쿠폰 증정', en: 'Gift coupon on signup' },
  'generic.ad.insurance.advertiser': { ko: '보험 · 페어금융 · 자세히 알아보기', en: 'Insurance · Fair Financial · Learn more' },
  'generic.ad.insurance.banner_title': { ko: '무료 보험 상담', en: 'Free insurance consultation' },
  'generic.ad.insurance.banner_sub': { ko: '상담 신청 시 기프트 쿠폰', en: 'Gift coupon when you apply' },
  'generic.form.car.title': { ko: 'EV 무료 시승 신청', en: 'EV free test drive' },
  'generic.form.car.incentive_item': { ko: '카페 기프트 쿠폰', en: 'café gift coupon' },
  'generic.form.insurance.title': { ko: '무료 보험 상담', en: 'Free insurance consultation' },
  'generic.form.insurance.incentive_item': { ko: '아이스크림 기프트 쿠폰', en: 'ice cream gift card' },
  'generic.native.car.incentive_item': { ko: '카페 쿠폰', en: 'café coupon' },
  'generic.native.insurance.incentive_item': { ko: '기프트 쿠폰', en: 'gift coupon' },
  'generic.kakao.news_a': { ko: '금융 고객 소식', en: 'Financial customer news' },
  'generic.kakao.news_b': { ko: '고객 패널 모집 안내', en: 'Panel recruitment notice' },
  'generic.kakao.cta_app': { ko: '금융 앱 안내', en: 'App info' },
  'generic.kakao.cta_site': { ko: '웹사이트 바로가기', en: 'Visit website' },
  'generic.kakao.chat_line1': {
    ko: '페어금융 채널에 오신 것을 환영합니다.',
    en: 'Welcome to the Fair Financial channel.',
  },
  'generic.line.welcome_blurb': {
    ko: '페어금융 공식 계정입니다.',
    en: 'Official Fair Financial account.',
  },
  'generic.line.cta_web': { ko: '페어금융 웹사이트', en: 'Fair Financial website' },
  'generic.line.cta_consult': { ko: '무료 상담', en: 'Free consultation' },

  /** Demo-safe labels ON — Chat */
  'generic.messaging.app_name': { ko: 'Chat', en: 'Chat' },
  'generic.messaging.channel_move': {
    ko: '광고 클릭 시 Chat 채널로 이동합니다',
    en: 'Tap the ad to open the Chat channel',
  },
  'generic.messaging.alert': { ko: 'Chat 채널로 연결됩니다.', en: 'Connecting to Chat channel.' },
  'generic.messaging.bridge_opening': { ko: 'Chat으로 이동 중입니다...', en: 'Opening Chat...' },
  'generic.messaging.marketing_optin': {
    ko: '광고와 마케팅 메시지를\nChat으로 받아볼 수 있습니다.',
    en: 'You can receive ads and marketing\nmessages via Chat.',
  },
  'generic.messaging.official_badge': { ko: '· 공식 Chat', en: '· Official Chat' },
  'generic.messaging.add_friend_ads': {
    ko: '이 계정으로 광고·프로모션 메시지를\nChat으로 받아보게 됩니다.',
    en: "You'll receive ads and promotional\nmessages from this account via Chat.",
  },
  'generic.messaging.chat_thanks_friend': {
    ko: "'{name}' 채널을 Chat 친구로 추가해 주셔서 감사합니다.",
    en: "Thank you for adding '{name}' on Chat!",
  },
  'generic.messaging.chat_inbox_line': {
    ko: 'Chat에서 보험 안내와 프로모션을 받아보실 수 있습니다.',
    en: "You'll receive plans and promotions in your Chat inbox.",
  },
  'generic.messaging.welcome_official_account': {
    ko: '{brand} 공식 Chat 계정입니다. 보험 안내와 프로모션 소식을 받아보세요.',
    en: "Welcome to {brand}'s official Chat account. Get insurance updates, tips, and offers.",
  },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}
