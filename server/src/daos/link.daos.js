import Link from "../models/link.model.js";

class LinkDAO {
  async create(linkData) {
    return await Link.create(linkData);
  }

  async findById(linkId) {
    return await Link.findOne({
      _id: linkId,
      isDeleted: false,
    });
  }

  async findByUserId(userId) {
    return await Link.find({
      userId,
      isDeleted: false,
    }).sort({
      isFeatured: -1,
      createdAt: -1,
    });
  }

  async updateById(linkId, updateData) {
    return await Link.findOneAndUpdate(
      {
        _id: linkId,
        isDeleted: false,
      },
      updateData,
      {
        returnDocument: "after",
        runValidators: true,
      }
    );
  }

  async incrementClicks(linkId) {
    return await Link.findOneAndUpdate(
      {
        _id: linkId,
        isDeleted: false,
      },
      {
        $inc: {
          clicks: 1,
        },
      },
      {
        returnDocument: "after",
      }
    );
  }

  async makeFeatured(linkId, userId) {
    await Link.updateMany(
      {
        userId,
        isDeleted: false,
      },
      {
        isFeatured: false,
      }
    );

    return await Link.findOneAndUpdate(
      {
        _id: linkId,
        userId,
        isDeleted: false,
      },
      {
        isFeatured: true,
      },
      {
        returnDocument: "after",
      }
    );
  }

  async softDelete(linkId, userId) {
    
    return await Link.findOneAndUpdate(
      {
        _id: linkId,
        userId: userId
      },
      {
        isDeleted: true,
      },
      {
        returnDocument: "after",
      }
    );
  }
}

export default new LinkDAO();