/*
Navicat MySQL Data Transfer

Source Server         : 123
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : no5

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-03-27 16:20:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT,
  `good_no` varchar(255) NOT NULL,
  `goodname` varchar(255) NOT NULL,
  `yingwen` varchar(255) NOT NULL,
  `price_nomal` int(255) NOT NULL,
  `price_no5` int(255) NOT NULL,
  `num` int(12) NOT NULL,
  `xiaoliang` int(20) NOT NULL,
  `haoping` int(255) NOT NULL,
  `url_1` varchar(255) NOT NULL,
  `url_2` varchar(255) NOT NULL,
  `url_3` varchar(255) NOT NULL,
  `url_4` varchar(255) NOT NULL,
  `url_5` varchar(255) NOT NULL,
  `zhekou` varchar(255) NOT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '123', '迪奥', 'Diao', '666', '200', '5', '23', '1', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.7折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('2', '234', '香奈儿', 'Chanel', '667', '249', '5', '22', '2', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.8折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('3', '666', '迪奥小姐', 'Diaoer', '668', '298', '2', '345', '3', 'images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', '(4.9折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('4', '123', '迪奥', 'Diao', '669', '347', '1', '11', '6', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.10折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('5', '234', '香奈儿', 'Chanel', '670', '396', '7', '67', '7', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.11折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('6', '666', '迪奥小姐', 'Diaoer', '671', '445', '3', '98', '9', 'images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', '(4.12折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('7', '123', '迪奥', 'Diao', '672', '494', '1', '123', '1', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.13折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('8', '234', '香奈儿', 'Chanel', '673', '543', '2', '345', '3', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.14折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('9', '666', '迪奥小姐', 'Diaoer', '674', '592', '3', '677', '5', 'images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', '(4.15折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('10', '123', '迪奥', 'Diao', '675', '641', '7', '999', '3', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.16折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('11', '234', '香奈儿', 'Chanel', '676', '690', '2', '111', '9', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.17折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('12', '666', '迪奥小姐', 'Diaoer', '677', '739', '3', '34', '33', 'images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', '(4.18折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('13', '123', '迪奥', 'Diao', '678', '788', '1', '25', '22', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.19折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('14', '234', '香奈儿', 'Chanel', '679', '837', '2', '11', '11', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.20折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('15', '666', '迪奥小姐', 'Diaoer', '680', '886', '3', '45', '44', 'images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', '(4.21折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('16', '123', '迪奥', 'Diao', '681', '935', '1', '66', '55', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.22折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('17', '234', '香奈儿', 'Chanel', '682', '984', '2', '55', '77', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.23折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('18', '666', '迪奥小姐', 'Diaoer', '683', '1033', '3', '99', '88', 'images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', '(4.24折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('19', '123', '迪奥', 'Diao', '666', '1082', '1', '88', '99', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.25折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('20', '234', '香奈儿', 'Chanel', '667', '1131', '2', '56', '17', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.26折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('21', '666', '迪奥小姐', 'Diaoer', '668', '1180', '3', '32', '12', 'images/d1.jpg', 'images/d2.jpg', 'images/d3.jpg', 'images/d4.jpg', 'images/d5.jpg', '(4.27折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('22', '123', '迪奥', 'Diao', '669', '1229', '1', '29', '15', 'images/diao1.jpg', 'images/diao2.jpg', 'images/diao3.jpg', 'images/diao4.jpg', 'images/diao5.jpg', '(4.28折)', '0000-00-00 00:00:00');
INSERT INTO `goodlist` VALUES ('23', '234', '香奈儿', 'Chanel', '670', '1278', '2', '30', '32', 'images/chanel1.jpg', 'images/chanel2.jpg', 'images/chanel3.jpg', 'images/chanel4.jpg', 'images/chanel5.jpg', '(4.29折)', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for shoppingcar
-- ----------------------------
DROP TABLE IF EXISTS `shoppingcar`;
CREATE TABLE `shoppingcar` (
  `id` int(22) unsigned NOT NULL,
  `good_no` varchar(225) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `goodname` varchar(255) NOT NULL,
  `price_nomal` int(22) NOT NULL,
  `price_no5` int(22) NOT NULL,
  `num` int(20) NOT NULL,
  `xuhao` int(25) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`xuhao`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppingcar
-- ----------------------------
INSERT INTO `shoppingcar` VALUES ('3', '666', 'zhangsan', '迪奥小姐', '668', '298', '3', '43');
INSERT INTO `shoppingcar` VALUES ('1', '123', 'zhangsan1', '迪奥', '666', '200', '3', '44');
INSERT INTO `shoppingcar` VALUES ('3', '666', 'zhangsan1', '迪奥小姐', '668', '298', '1', '45');
INSERT INTO `shoppingcar` VALUES ('9', '666', 'zhangsan1', '迪奥小姐', '674', '592', '2', '46');
INSERT INTO `shoppingcar` VALUES ('11', '234', 'wangwu', '香奈儿', '676', '690', '3', '47');
INSERT INTO `shoppingcar` VALUES ('19', '123', 'wangwu', '迪奥', '666', '1082', '2', '48');
INSERT INTO `shoppingcar` VALUES ('1', '123', 'zhangzhang', '迪奥', '666', '200', '2', '49');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhangsan', 'a1234567');
INSERT INTO `user` VALUES ('2', 'wangwu', 'a1234567');
INSERT INTO `user` VALUES ('5', 'zhangsan1', 'a123456');
INSERT INTO `user` VALUES ('4', 'honghong', 'a123456');
INSERT INTO `user` VALUES ('6', 'xiugege', 'a123456');
INSERT INTO `user` VALUES ('7', 'zhangsansan', 'a123456');
INSERT INTO `user` VALUES ('8', 'biaoge1', 'a1234567');
INSERT INTO `user` VALUES ('9', 'zhangsan4', 'a1234567');
INSERT INTO `user` VALUES ('10', 'zhangsan5', 'a1234567');
INSERT INTO `user` VALUES ('11', 'zhangsan2', 'a1234567');
INSERT INTO `user` VALUES ('12', 'zhangzhang', 'a1234567');
INSERT INTO `user` VALUES ('13', 'wangwnag', 'a123456');
SET FOREIGN_KEY_CHECKS=1;
