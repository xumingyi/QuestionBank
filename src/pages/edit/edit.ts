import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ActionSheetController, AlertController} from 'ionic-angular';

import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker";
import {Camera, CameraOptions} from "@ionic-native/camera";

import {UserDataProvider} from "../../providers/user-data/user-data";
import {CityDataProvider} from "../../providers/city-data/city-data";

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  editUsernamePage = 'EditUsernamePage';
  editIntroPage = 'EditIntroPage';
  editPhonePage = 'EditPhonePage';

  avatar: string;
  username: string;
  gender: boolean;
  birthday: string;
  intro: string;
  email: string;
  phone: string;
  location: string;

  maxDate: string = new Date().toLocaleDateString().replace(/[^\d]/g, '-');

  cityColumns: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public userDataProvider: UserDataProvider, public cityDataProvider: CityDataProvider, public imagePicker: ImagePicker, public camera: Camera) {
    this.cityColumns = this.cityDataProvider.cities;
  }

  ionViewWillEnter() {
    this.getAvatar();
    this.getUsername();
    this.getGender();
    this.getBirthday();
    this.getIntro();
    this.getEmail();
    this.getPhone();
    this.getLocation();
  }

  save() {
    this.userDataProvider.setAvatar(this.avatar);
    this.userDataProvider.setGender(this.gender);
    this.userDataProvider.setBirthday(this.birthday.replace(/[^\d]/g, '/'));
    this.userDataProvider.setLocation(this.location);
    this.navCtrl.pop().then(value => {
      return value;
    });
  }

  openPage(page: string) {
    return this.navCtrl.push(page).then(value => {
      return value;
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [{
        text: '拍照',
        role: 'takePhoto',
        handler: () => {
          this.takePhoto();
        }
      }, {
        text: '从相册选择',
        role: 'chooseFromAlbum',
        handler: () => {
          this.chooseFromAlbum();
        }
      }, {
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log("cancel");
        }
      }]
    });

    actionSheet.present().then(value => {
      return value;
    });
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 200,
      saveToPhotoAlbum: true,
    };

    this.camera.getPicture(options).then(image => {
      console.log('Image URI: ' + image);
      this.avatar = image.slice(7);
    }, error => {
      console.log('Error: ' + error);
    });
  }

  chooseFromAlbum() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
      width: 200,
      height: 200
    };
    this.imagePicker.getPictures(options).then(images => {
      if (images.length > 1) {
        this.presentAlert();
      } else if (images.length === 1) {
        console.log('Image URI: ' + images[0]);
        this.avatar = images[0].slice(7);
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  presentAlert() {
    let alert = this.alertCtrl.create({title: "上传失败", message: "只能选择一张图片作为头像哦", buttons: ["确定"]});
    alert.present().then(value => {
      return value;
    });
  }

  getAvatar() {
    this.userDataProvider.getAvatar().then(avatar => {
      this.avatar = avatar;
    });
  }

  getUsername() {
    this.userDataProvider.getUsername().then(username => {
      this.username = username;
    });
  }

  getGender() {
    this.userDataProvider.getGender().then(gender => {
      this.gender = gender;
    });
  }

  getBirthday() {
    this.userDataProvider.getBirthday().then(birthday => {
      this.birthday = birthday.replace(/[^\d]/g, '-');
    });
  }

  getIntro() {
    this.userDataProvider.getIntro().then(intro => {
      this.intro = intro;
    });
  }

  getEmail() {
    this.userDataProvider.getEmail().then(email => {
      this.email = email;
    });
  }

  getPhone() {
    this.userDataProvider.getPhone().then(phone => {
      this.phone = phone;
    });
  }

  getLocation() {
    this.userDataProvider.getLocation().then(location => {
      this.location = location;
    });
  }

}
