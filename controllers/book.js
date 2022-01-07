const Book = require('../models/book');

exports.getIndex = async (req, res, next) => {
	try {
        const books = await Book.find();
		res.render('index', { books });
	} catch (error) {
		next(error);
	}
};

exports.getTambah = async (req, res, next) => {
	try {
		res.render('tambah');
	} catch (error) {
		next(error);
	}
};

exports.addBook = async (req, res, next) => {
	try {
		const {
			title,
			deskripsi,
			penulis,
			bahasa,
			harga,
			image,
			jumlahHalaman,
			penerbit,
			isbn,
			tanggalTerbit,
			berat,
			lebar,
			panjang,
		} = req.body;

		const newBook = new Book({
			title: title,
			deskripsi: deskripsi,
			penulis: penulis,
			bahasa: bahasa,
			harga: harga,
			image: image,
			jumlahHalaman: jumlahHalaman,
			penerbit: penerbit,
			isbn: isbn,
			tanggalTerbit: tanggalTerbit,
			berat: berat,
			lebar: lebar,
			panjang: panjang,
		});

		await newBook.save();

        res.redirect('/');
	} catch (error) {
		next(error);
	}
};

exports.getDetail = async (req, res, next) => {
	try {
        const {id} = req.params
		const book = await Book.findById(id);
		res.render('detail', { book });
	} catch (error) {
		next(error);
	}
};

exports.getEdit = async (req, res, next) => {
	try {
		const { id } = req.params;
		const book = await Book.findById(id);
		res.render('edit', { book });
	} catch (error) {
		next(error);
	}
};

exports.postEdit = async (req, res, next) => {
	try {
		const { id } = req.params;
		const {
			title,
			deskripsi,
			penulis,
			bahasa,
			harga,
			image,
			jumlahHalaman,
			penerbit,
			isbn,
			tanggalTerbit,
			berat,
			lebar,
			panjang,
		} = req.body;

		const newBook = {
			title: title,
			deskripsi: deskripsi,
			penulis: penulis,
			bahasa: bahasa,
			harga: harga,
			image: image,
			jumlahHalaman: jumlahHalaman,
			penerbit: penerbit,
			isbn: isbn,
			tanggalTerbit: tanggalTerbit,
			berat: berat,
			lebar: lebar,
			panjang: panjang,
		};

		await Book.findByIdAndUpdate(id, newBook);

		res.redirect('/');
	} catch (error) {
		next(error);
	}
};

exports.deleteBook = async (req, res, next) => {
	try {
		const { id } = req.body;

		await Book.findByIdAndDelete(id);
        
		res.redirect('/');
	} catch (error) {
		next(error);
	}
};
