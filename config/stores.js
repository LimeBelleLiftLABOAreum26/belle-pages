/* 店舗情報はこのファイルだけで変更します。new-storeは公開しないひな形です。
   enabled: true にする前に全項目を埋めてください。
   元HTMLに定休日の記載がないため、志木店はお問い合わせ表示にしています。 */
window.BELLE_STORES = {
  "shiki": {
    "enabled": true,
    "name": "Belle志木店",
    "bookingLabel": "志木店のWEB予約はこちら",
    "address": [
      "埼玉県新座市東北２丁目31-15",
      "太田ビル 5A"
    ],
    "access": "志木駅から徒歩2分",
    "hours": "10:30～19:00",
    "closedDays": "店舗へお問い合わせください",
    "bookingUrl": "http://b.hpr.jp/kr/hp/H000788087",
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207048.93614400105!2d139.2695791945312!3d35.82104980000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e90d798b6449%3A0x6d5c490e1e8e77ac!2z44CQ44OL44Kt44OT44Kx44Ki5bCC6ZaA772c44OP44O844OW44OU44O844Oq44Oz44Kw44CR6Z-T5Zu96IKM566h55CGQmVsbGUg5b-X5pyo!5e0!3m2!1sja!2sjp!4v1793159453981!5m2!1sja!2sjp",
    "phone": "0120-985-932"
  },
  "new-store": {
    "enabled": false,
    "name": "Belle〇〇店",
    "bookingLabel": "〇〇店のWEB予約はこちら",
    "address": [
      "都道府県・市区町村・番地",
      "建物名・部屋番号"
    ],
    "access": "〇〇駅から徒歩〇分",
    "hours": "00:00～00:00",
    "closedDays": "定休日を入力",
    "bookingUrl": "",
    "mapEmbedUrl": "",
    "phone": ""
  }
};
