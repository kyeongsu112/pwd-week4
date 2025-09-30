const express = require('express');
const router = express.Router();
const submissions = []; // 임시 메모리 (DB 연동 시 교체)

// GET /api/submissions
router.get('/', (req, res) => {
  const { status } = req.query;
  let data = submissions;
  if (status) {
    data = submissions.filter(s => s.status === status);
  }
  res.json({ data });
});

// POST /api/submissions
router.post('/', (req, res) => {
  const newSubmission = { id: Date.now(), status: 'pending', ...req.body };
  submissions.push(newSubmission);
  res.status(201).json({ data: newSubmission });
});

// PUT /api/submissions/:id
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const index = submissions.findIndex(s => s.id == id);
  if (index === -1) return res.status(404).json({ error: { message: 'Not found' } });
  submissions[index] = { ...submissions[index], ...req.body };
  res.json({ data: submissions[index] });
});

// DELETE /api/submissions/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = submissions.findIndex(s => s.id == id);
  if (index === -1) return res.status(404).json({ error: { message: 'Not found' } });
  submissions.splice(index, 1);
  res.status(204).end();
});

module.exports = router;
