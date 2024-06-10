package com.unicap.capnet.services.comment;

import com.unicap.capnet.domain.comment.ListCommentDTO;
import com.unicap.capnet.domain.comment.Comment;
import com.unicap.capnet.domain.comment.CommentDTO;
import com.unicap.capnet.domain.comment.UpdateCommentDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICommentService {
    Comment findById(long commentId);

    Page<ListCommentDTO> findAllComments(Pageable pagination);

    void saveComment(CommentDTO data);

    void updateComment(UpdateCommentDTO data);

    void deleteComment(long commentId);
}
