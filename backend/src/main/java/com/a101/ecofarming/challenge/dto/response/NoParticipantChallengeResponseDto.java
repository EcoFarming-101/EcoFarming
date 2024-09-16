package com.a101.ecofarming.challenge.dto.response;

import lombok.*;

import java.time.LocalDate;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class NoParticipantChallengeResponseDto {
    private Integer id;
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private Byte frequency;
    private Byte duration;
    private Long userCount;
    private String guideText;
    private Integer balanceId;
    private String option1Description;
    private String option2Description;
    private Integer totalBetAmountOption1;
    private Integer totalBetAmountOption2;
}