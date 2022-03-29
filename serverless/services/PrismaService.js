import {PrismaClient} from "@prisma/client";


const prisma = new PrismaClient();


export const getInputsByCategory = (categoryId) => {
    return prisma.calculatorInput.findMany({
        where: {
            category_id: categoryId,
        },
        select: {
            id: true,
        },
    });
};

export const getCountOfUsersUniqueFilledResultsByCategory = (
    userId,
    idArray
) => {
    return prisma.calculatorResult.findMany({
        distinct: ["input_id"],
        where: {
            user_id: userId,
            input_id: {in: idArray},
        },
    });
};

export const getListofProjects = () => {
    return prisma.project.findMany();
};


export const getProject = (projectID) => {
    return prisma.project.findUnique({
        where: {
            id: projectID,
        },
    });
};

export const createNewProject = (data, wallet, publicAddress) => {
  return prisma.project.create({
    data: {
      projectname: data.projectname,
      projectimage1: data.projectimage1,
      projectimage2: data.projectimage2,
      projectimage3: data.projectimage3,
      projectimage4: data.projectimage4,
      projectimage5: data.projectimage5,
      cptgbp: data.cptgbp,
      latitude: data.latitude,
      longitude: data.longitude,
      streetname: data.streetname,
      city: data.city,
      county: data.county,
      country: data.country,
      totalsupply: data.totalsupply,
      remainingsupply: data.remainingsupply,
      ownername: data.ownername,
      ownerpicture: data.ownerpicture,
      type: data.type,
      website: data.website,
      description: data.description,
      datefounded: data.datefounded,
      ethWallet: wallet,
      publicAddress: publicAddress,
    },
  });};



    export const editProjectById = (data, id) => {
        return prisma.project.update({
            where: {
                id: id,
            },
            data: {
                projectname: data.projectname,
                projectimage1: data.projectimage1,
                projectimage2: data.projectimage2,
                projectimage3: data.projectimage3,
                projectimage4: data.projectimage4,
                projectimage5: data.projectimage5,
                cptgbp: data.cptgbp,
                latitude: data.latitude,
                longitude: data.longitude,
                streetname: data.streetname,
                city: data.city,
                county: data.county,
                country: data.country,
                totalsupply: data.totalsupply,
                remainingsupply: data.remainingsupply,
                ownername: data.ownername,
                ownerpicture: data.ownerpicture,
                type: data.type,
                website: data.website,
                description: data.description,
                datefounded: data.datefounded,
            },
        });
    }

export const addWalletToUserId = (userId, wallet, publicAddress) => {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ethWallet: wallet,
      publicAddress: publicAddress,
    },
  });}

export const getWalletById = (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
    },
  });
};
