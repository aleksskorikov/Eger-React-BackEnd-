import fs from 'fs';
import { v4 } from 'uuid';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { products } from '../models/models.js';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ProductController {

    async create(req, res) {
    try {
        const {
            name, price, description, list1, list2, list3, list4, list5, list6, list7,
            list8, list9, list10, list11, list12, list13, list14, list15, list16, list17,
            list18, list19, list20, product_category, page_name, category
        } = req.body;

        const imageFields = ['imgSrc', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];
        let images = {};

        if (req.files) {
            for (const field of imageFields) {
                if (req.files[field]) {
                    const imgFile = req.files[field];
                    const imgFileName = v4() + path.extname(imgFile.name);
                    const imgPath = resolve(__dirname, '..', 'static', imgFileName);

                    await new Promise((resolve, reject) => {
                        imgFile.mv(imgPath, (err) => {
                            if (err) return reject(err);
                            resolve();
                        });
                    });

                    images[field] = imgFileName; 
                }
            }
        }

        const product = await products.create({
            name,
            price,
            description,
            list1,
            list2,
            list3,
            list4,
            list5,
            list6,
            list7,
            list8,
            list9,
            list10,
            list11,
            list12,
            list13,
            list14,
            list15,
            list16,
            list17,
            list18,
            list19,
            list20,
            product_category,
            page_name,
            category,
            ...images 
        });

        return res.status(201).json(product);
    } catch (error) {
        console.error('Ошибка при создании продукта:', error);
        return res.status(500).json({ message: 'Ошибка при создании продукта.', error: error.message });
    }
}

    async getAll(req, res) {
        try {
            const productsList = await products.findAll();
            return res.json(productsList);
        } catch (error) {
            console.error('Ошибка при получении всех продуктов:', error);
            return res.status(500).json({ message: 'Ошибка при получении всех продуктов.', error: error.message });
        }
    }

async getOne(req, res) {
    try {
        const { id } = req.params;
        const product = await products.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден.' });
        }

        const images = [
            product.imgSrc ? `http://localhost:5001/static/${product.imgSrc}` : null,
            product.img2 ? `http://localhost:5001/static/${product.img2}` : null,
            product.img3 ? `http://localhost:5001/static/${product.img3}` : null,
            product.img4 ? `http://localhost:5001/static/${product.img4}` : null,
            product.img5 ? `http://localhost:5001/static/${product.img5}` : null,
            product.img6 ? `http://localhost:5001/static/${product.img6}` : null,
            product.img7 ? `http://localhost:5001/static/${product.img7}` : null,
            product.img8 ? `http://localhost:5001/static/${product.img8}` : null,
            product.img9 ? `http://localhost:5001/static/${product.img9}` : null,
            product.img10 ? `http://localhost:5001/static/${product.img10}` : null,
        ].filter(image => image !== null);

        return res.json({ ...product.toJSON(), images });
    } catch (e) {
        return res.status(500).json({ message: 'Ошибка при получении продукта.', error: e.message });
    }
}

    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            const product = await products.findByPk(id);

            if (!product) {
                return res.status(404).json({ message: 'Продукт не найден.' });
            }

            const images = [product.imgSrc, product.img2, product.img3, product.img4, product.img5, product.img6, product.img7, product.img8, product.img9, product.img10];
            
            images.forEach((image) => {
                if (image) {
                    const imagePath = resolve(__dirname, '..', 'static', image);
                    fs.unlink(imagePath, (err) => {
                        if (err) {
                            console.error('Ошибка при удалении изображения:', err);
                        }
                    });
                }
            });

            await product.destroy();
            return res.status(200).json({ message: 'Продукт успешно удален.' });
        } catch (error) {
            console.error('Ошибка при удалении продукта:', error);
            return res.status(500).json({ message: 'Ошибка при удалении продукта.', error: error.message });
        }
    };

    async deleteImage(req, res) {
    try {
        const { id, imageName } = req.params;

        const product = await products.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден.' });
        }

        const imageFields = ['imgSrc', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10'];
        if (!imageFields.includes(imageName)) {
            return res.status(400).json({ message: 'Некорректное имя изображения.' });
        }

        const imagePath = resolve(__dirname, '..', 'static', product[imageName]);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Ошибка при удалении изображения:', err);
                return res.status(500).json({ message: 'Ошибка при удалении изображения.', error: err.message });
            }
        });

        await product.update({ [imageName]: null });

        return res.status(200).json({ message: 'Изображение успешно удалено.' });
    } catch (error) {
        console.error('Ошибка при удалении изображения:', error);
        return res.status(500).json({ message: 'Ошибка при удалении изображения.', error: error.message });
    }
    };



    async update(req, res) {
    try {
        const { id } = req.params;
        const { 
            name, price, description, 
            list1, list2, list3, list4, list5, list6, list7, list8, list9, list10, 
            list11, list12, list13, list14, list15, list16, list17, list18, list19, list20,
            product_category, page_name, category 
        } = req.body;

        const product = await products.findByPk(id);

        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден.' });
        }

        let imgSrc = product.imgSrc;
        let img2 = product.img2;
        let img3 = product.img3;
        let img4 = product.img4;
        let img5 = product.img5;
        let img6 = product.img6;
        let img7 = product.img7;
        let img8 = product.img8;
        let img9 = product.img9;
        let img10 = product.img10;

        if (req.files) {
            if (req.files.imgSrc) {
                const { imgSrc: imgFile } = req.files;
                imgSrc = v4() + path.extname(imgFile.name);
                const imgPath = resolve(__dirname, '..', 'static', imgSrc);

                await new Promise((resolve, reject) => {
                    imgFile.mv(imgPath, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }

            if (req.files.img2) {
                const { img2: imgFile2 } = req.files;
                img2 = v4() + path.extname(imgFile2.name);
                const imgPath2 = resolve(__dirname, '..', 'static', img2);

                await new Promise((resolve, reject) => {
                    imgFile2.mv(imgPath2, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }

            if (req.files.img3) {
                const { img3: imgFile3 } = req.files;
                img3 = v4() + path.extname(imgFile3.name);
                const imgPath3 = resolve(__dirname, '..', 'static', img3);

                await new Promise((resolve, reject) => {
                    imgFile3.mv(imgPath3, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }

            if (req.files.img4) {
                const { img4: imgFile4 } = req.files;
                img4 = v4() + path.extname(imgFile4.name);
                const imgPath4 = resolve(__dirname, '..', 'static', img4);

                await new Promise((resolve, reject) => {
                    imgFile4.mv(imgPath4, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }

            if (req.files.img5) {
                const { img5: imgFile5 } = req.files;
                img5 = v4() + path.extname(imgFile5.name);
                const imgPath5 = resolve(__dirname, '..', 'static', img5);

                await new Promise((resolve, reject) => {
                    imgFile5.mv(imgPath5, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }

            if (req.files.img6) {
                const { img6: imgFile6 } = req.files;
                img6 = v4() + path.extname(imgFile6.name);
                const imgPath6 = resolve(__dirname, '..', 'static', img6);

                await new Promise((resolve, reject) => {
                    imgFile6.mv(imgPath6, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }
            if (req.files.img7) {
                const { img7: imgFile7 } = req.files;
                img7 = v4() + path.extname(imgFile7.name);
                const imgPath7 = resolve(__dirname, '..', 'static', img7);

                await new Promise((resolve, reject) => {
                    imgFile7.mv(imgPath7, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }
            if (req.files.img8) {
                const { img8: imgFile8 } = req.files;
                img8 = v4() + path.extname(imgFile8.name);
                const imgPath8 = resolve(__dirname, '..', 'static', img8);

                await new Promise((resolve, reject) => {
                    imgFile8.mv(imgPath8, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }
            if (req.files.img9) {
                const { img9: imgFile9 } = req.files;
                img9 = v4() + path.extname(imgFile9.name);
                const imgPath9 = resolve(__dirname, '..', 'static', img9);

                await new Promise((resolve, reject) => {
                    imgFile9.mv(imgPath9, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }
            if (req.files.img10) {
                const { img10: imgFile10 } = req.files;
                img10 = v4() + path.extname(imgFile10.name);
                const imgPath10 = resolve(__dirname, '..', 'static', img10);

                await new Promise((resolve, reject) => {
                    imgFile10.mv(imgPath10, (err) => {
                        if (err) reject(err);
                        resolve();
                    });
                });
            }
        }

        product.name = name;
        product.price = price;
        product.description = description;
        product.list1 = list1;
        product.list2 = list2;
        product.list3 = list3;
        product.list4 = list4;
        product.list5 = list5;
        product.list6 = list6;
        product.list7 = list7;
        product.list8 = list8;
        product.list9 = list9;
        product.list10 = list10;
        product.list11 = list11;
        product.list12 = list12;
        product.list13 = list13;
        product.list14 = list14;
        product.list15 = list15;
        product.list16 = list16;
        product.list17 = list17;
        product.list18 = list18;
        product.list19 = list19;
        product.list20 = list20;
        product.product_category = product_category;
        product.page_name = page_name;
        product.category = category;
        product.imgSrc = imgSrc;
        product.img2 = img2;
        product.img3 = img3;
        product.img4 = img4;
        product.img5 = img5;
        product.img6 = img6;
        product.img7 = img7;
        product.img8 = img8;
        product.img9 = img9;
        product.img10 = img10;

        await product.save();

        return res.json(product);
    } catch (error) {
        console.error('Ошибка при обновлении продукта:', error);
        return res.status(500).json({ message: 'Ошибка при обновлении продукта.', error: error.message });
    }
}
}

export default new ProductController();
