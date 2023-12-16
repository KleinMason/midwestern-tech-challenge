CREATE VIEW home_content_details AS
SELECT hc.homeContentId,
  hc.title,
  hc.content,
  i.imageId,
  i.imageUrl,
  i.alt AS imageAlt,
  hc.createdAt,
  hc.updatedAt
FROM home_content_image hci
  INNER JOIN home_content hc ON hci.homeContentId = hc.homeContentId
  INNER JOIN image i ON hci.imageId = i.imageId;