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

  editAvatar: string;
  editGender: boolean;
  editBirthday: string;
  editLocation: string;
  editInfo = [this.editAvatar, this.editGender, this.editBirthday, this.editLocation];

  maxDate: string;

  getMaxDate() {
    let maxDateArray = new Date().toLocaleDateString().split("/");
    if (parseInt(maxDateArray[1]) < 10) {
      maxDateArray[1] = "0" + maxDateArray[1];
    }
    if (parseInt(maxDateArray[2]) < 10) {
      maxDateArray[2] = "0" + maxDateArray[2];
    }
    this.maxDate = maxDateArray[0] + "-" + maxDateArray[1] + "-" + maxDateArray[2];
  }

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
    this.getMaxDate();
  }

  ionViewDidEnter() {
    if (typeof(this.editAvatar) === 'undefined') {
      this.editAvatar = this.avatar;
    }
    if (typeof(this.editGender) === 'undefined') {
      this.editGender = this.gender;
    }
    if (typeof(this.editBirthday) === 'undefined') {
      this.editBirthday = this.birthday;
    }
    if (typeof(this.editLocation) === 'undefined') {
      this.editLocation = this.location;
    }
  }

  save() {
    this.userDataProvider.setAvatar(this.editAvatar);
    this.userDataProvider.setGender(this.editGender);
    this.userDataProvider.setBirthday(this.editBirthday);
    this.userDataProvider.setLocation(this.editLocation);
    this.navCtrl.pop().then(value => {
      return value;
    });
  }

  callback = (editInfo) => {
    return new Promise(resolve => {
      this.editInfo = editInfo;
      resolve("callback");
    });
  };

  openEditPage(page: string) {
    this.navCtrl.push(page, {editInfo: this.editInfo, callback: this.callback}).then(value => {
      return value;
    });
  }

  openPage(page: string) {
    this.navCtrl.push(page).then(value => {
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
      this.editAvatar = image.slice(7);
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
        this.editAvatar = images[0].slice(7);
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
      this.birthday = birthday;
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
