export interface Book {
    title?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: Date;
    description?: string;
    previewLink?: string;
    thumbnail?: string;
}

export interface VolumeInfo {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: Date;
    description: string;
    pageCount: number;
    printType: string;
    mainCategory: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}

export interface Item {
    volumeInfo: VolumeInfo
}

export interface BookResults {
    items: Item[];
    totalItems: number
}

export function itemToBook(item: Item): Book {
    return {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.infoLink,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
      }
}