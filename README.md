# mobileSoftware_assignment
2021-2 모바일소프트웨어 과제 개인 프로젝트( 운동 일지 기록 어플리케이션)
<img width="1479" alt="image" src="https://user-images.githubusercontent.com/76774056/152936148-6f2bfb1a-0286-4120-bbdf-f92eff567184.png">

## Getting Started
npx react-native link

npm i react-native-paper react-native-vector-icons react-native-appearance react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context 

npm i @react-native-community/masked-view @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs

npm i -D @types/react-native-vector-icons

npm install react-native-select-dropdown

npm install --save react-native-calendar-picker

npm install --save moment

npx pod-install

ios/폴더명/Info.plist에 

<key>UIAppFonts</key>
<array>
<string>NanumMyeongjo.ttf</string>
<string>FontAwesome.ttf</string>
</array>

있는지 확인 후 없으면 추가
추가 후 

npx pod-install
