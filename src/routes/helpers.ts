export const pathsPublic: {[k:string]: string} ={
    home: '/',
}

export const pathsPrivate: {[k:string]: string} ={
    accountSettings: '/account-settings',
}

export const paths: {[k: string]: string} = Object.assign({}, pathsPublic, pathsPrivate)


export const checkPathMatch = (
    pathname: string,
    paths: { [k: string]: string },
) => {
    let isMatch =false

    const AllPaths = Object.keys(paths).map((k) => paths[k])
    const pathFirstSection = pathname.split('/')[1]

    AllPaths.forEach((p)=>{
        if (p.slice(1) === pathFirstSection) isMatch = true
    })

    return isMatch
}
