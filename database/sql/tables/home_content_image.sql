CREATE TABLE IF NOT EXISTS home_content_image (
  homeContentImageId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  homeContentId INT NOT NULL,
  imageId INT NOT NULL,
  FOREIGN KEY (homeContentId) REFERENCES home_content(homeContentId),
  FOREIGN KEY (imageId) REFERENCES image(imageId)
);